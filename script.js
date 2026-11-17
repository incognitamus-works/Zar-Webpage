// Nargila Bar Žar — menu interactions
document.addEventListener("DOMContentLoaded", () => {
  const $ = (s, r = document) => r.querySelector(s)
  const $$ = (s, r = document) => [...r.querySelectorAll(s)]

  const hour = new Date().getHours()
  const isOpen = hour >= 8 || hour < 3 // 08:00 – 03:00
  const isDay = hour >= 8 && hour < 16 // morning prices

  /* ---------- Open / closed status ---------- */
  $$("[data-status]").forEach((el) => {
    el.classList.add(isOpen ? "is-open" : "is-closed")
    $(".status-text", el).textContent = isOpen ? "Otvoreno · do 03:00" : "Zatvoreno · otvaramo u 08:00"
  })

  /* ---------- Time-based prices ---------- */
  $$("[data-time-price]").forEach((item) => {
    const price = isDay ? item.dataset.morning : item.dataset.evening
    $(".item-price", item).innerHTML = `${price} <small>KM</small>`
  })
  $$("[data-daypart]").forEach((el) => {
    el.innerHTML = isDay
      ? '<svg><use href="#i-sun"/></svg>Jutarnje cijene'
      : '<svg><use href="#i-moon"/></svg>Večernje cijene'
  })

  /* ---------- Header on scroll ---------- */
  const header = $("#header")
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 20)
  onScroll()
  window.addEventListener("scroll", onScroll, { passive: true })

  /* ---------- Reveal on scroll ---------- */
  const revealIO = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible")
          revealIO.unobserve(e.target)
        }
      })
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  )
  $$(".reveal").forEach((el) => revealIO.observe(el))

  /* ---------- Active section in nav / tab bar ---------- */
  const navLinks = $$(".nav a, .tabbar a")
  const sectionIO = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return
        const id = e.target.id
        navLinks.forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === `#${id}`))
      })
    },
    { rootMargin: "-45% 0px -50% 0px" }
  )
  ;["home", "drinks", "hookah", "contact"].forEach((id) => {
    const s = document.getElementById(id)
    if (s) sectionIO.observe(s)
  })

  /* ---------- Drink category chips (scroll-spy) ---------- */
  const catChips = $$("#drinks-toolbar .chip")
  const chipRow = $("#drinks-toolbar .chips")
  const setActiveChip = (id) => {
    catChips.forEach((c) => {
      const on = c.getAttribute("href") === `#${id}`
      c.classList.toggle("is-active", on)
      if (on && chipRow) {
        const offset = c.getBoundingClientRect().left - chipRow.getBoundingClientRect().left
        chipRow.scrollTo({ left: chipRow.scrollLeft + offset - 16, behavior: "smooth" })
      }
    })
  }
  const catIO = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => e.isIntersecting && setActiveChip(e.target.id))
    },
    { rootMargin: "-35% 0px -60% 0px" }
  )
  $$(".category").forEach((c) => catIO.observe(c))

  /* ---------- Drink search ---------- */
  const fold = (s) =>
    s
      .toLowerCase()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .replace(/đ/g, "dj")

  const search = $("#drink-search")
  const drinkEmpty = $("#drink-empty")
  const items = $$("#drink-menu .item").map((el) => ({ el, text: fold(el.textContent) }))

  search?.addEventListener("input", () => {
    const q = fold(search.value.trim())
    items.forEach(({ el, text }) => el.classList.toggle("is-hidden", q && !text.includes(q)))
    let any = false
    $$("#drink-menu .category").forEach((cat) => {
      const has = $$(".item:not(.is-hidden)", cat).length > 0
      cat.classList.toggle("is-hidden", !has)
      any ||= has
    })
    drinkEmpty.hidden = any
  })

  /* ---------- Hookah filters ---------- */
  const flavors = $$("#flavors .flavor")
  const flavorCount = $("#flavor-count")
  const flavorEmpty = $("#flavor-empty")
  const state = { brand: "all", flavor: "all" }

  const applyFlavorFilter = () => {
    let shown = 0
    flavors.forEach((f) => {
      const okBrand = state.brand === "all" || f.dataset.brand === state.brand
      const okFlavor = state.flavor === "all" || f.dataset.tags.split(" ").includes(state.flavor)
      const show = okBrand && okFlavor
      const wasHidden = f.classList.contains("is-hidden")
      f.classList.toggle("is-hidden", !show)
      if (show) {
        shown++
        if (wasHidden) {
          f.classList.remove("is-entering")
          void f.offsetWidth
          f.classList.add("is-entering")
        }
      }
    })
    flavorCount.textContent = `Prikazano ${shown} od ${flavors.length} okusa`
    flavorEmpty.hidden = shown > 0
  }

  const bindChipGroup = (attr, key) => {
    const chips = $$(`[data-${attr}]`)
    chips.forEach((chip) => {
      chip.addEventListener("click", () => {
        chips.forEach((c) => {
          c.classList.toggle("is-active", c === chip)
          c.setAttribute("aria-pressed", String(c === chip))
        })
        state[key] = chip.dataset[attr]
        applyFlavorFilter()
      })
    })
  }
  bindChipGroup("brand", "brand")
  bindChipGroup("flavor", "flavor")
  applyFlavorFilter()
})
