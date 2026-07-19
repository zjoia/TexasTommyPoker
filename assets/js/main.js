/* =====================================================================
   Texas Tommy Poker — site interactions
   Vanilla JS, no dependencies. Progressive enhancement only.
   ===================================================================== */
(function () {
  "use strict";

  /* ---- Current year in footer ---- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ---- Sticky nav shadow + mobile toggle ---- */
  var nav = document.querySelector(".nav");
  if (nav) {
    var onScroll = function () {
      nav.classList.toggle("is-scrolled", window.scrollY > 10);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    var toggle = nav.querySelector(".nav__toggle");
    var links = nav.querySelector(".nav__links");
    if (toggle && links) {
      toggle.addEventListener("click", function () {
        var open = nav.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
        document.body.style.overflow = open ? "hidden" : "";
      });
      // Close the menu when a link is tapped
      links.addEventListener("click", function (e) {
        if (e.target.closest("a")) {
          nav.classList.remove("is-open");
          toggle.setAttribute("aria-expanded", "false");
          document.body.style.overflow = "";
        }
      });
    }
  }

  /* ---- Reveal on scroll ---- */
  var reveals = document.querySelectorAll(".reveal");
  if (reveals.length && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---- Copy WPT Global code to clipboard ---- */
  document.querySelectorAll("[data-copy]").forEach(function (el) {
    el.addEventListener("click", function () {
      var code = el.getAttribute("data-copy") || el.textContent.trim();
      var done = function () {
        var hint = el.parentElement.querySelector(".hint");
        if (hint) {
          var prev = hint.textContent;
          hint.textContent = "Copied ✓";
          setTimeout(function () { hint.textContent = prev; }, 1800);
        }
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(code).then(done).catch(done);
      } else {
        done();
      }
    });
  });

  /* ---- Form validation + submit handling ---- */
  document.querySelectorAll("form[data-form]").forEach(function (form) {
    var statusEl = form.querySelector(".form__status");
    var submitBtn = form.querySelector("[type=submit]");

    var setError = function (field, msg) {
      field.classList.add("has-error");
      var err = field.querySelector(".field__error");
      if (err && msg) err.textContent = msg;
    };
    var clearError = function (field) { field.classList.remove("has-error"); };

    var validate = function () {
      var ok = true;
      form.querySelectorAll(".field").forEach(function (field) {
        var control = field.querySelector("input, select, textarea");
        if (!control) return;
        clearError(field);
        var val = (control.value || "").trim();

        if (control.required && !val) {
          setError(field, "This field is required.");
          ok = false;
          return;
        }
        if (control.type === "email" && val) {
          var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!re.test(val)) {
            setError(field, "Please enter a valid email address.");
            ok = false;
          }
        }
      });
      return ok;
    };

    // Clear errors as the user fixes them
    form.addEventListener("input", function (e) {
      var field = e.target.closest(".field");
      if (field && field.classList.contains("has-error")) clearError(field);
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (statusEl) statusEl.className = "form__status";

      if (!validate()) {
        if (statusEl) {
          statusEl.classList.add("is-error");
          statusEl.textContent = "Please fix the highlighted fields and try again.";
        }
        return;
      }

      var endpoint = form.getAttribute("action");
      var usingPlaceholder =
        !endpoint ||
        endpoint.indexOf("YOUR_FORM_ID") !== -1 ||
        endpoint === "#";

      // No real endpoint configured yet: show a friendly success + log payload.
      if (usingPlaceholder) {
        if (statusEl) {
          statusEl.classList.add("is-success");
          statusEl.innerHTML =
            "Thanks — your message is ready to send. <br><small>Heads up: connect a form endpoint (see README) to start receiving these in your inbox.</small>";
        }
        form.reset();
        return;
      }

      // Real submission (works out of the box with Formspree / Netlify Forms)
      if (submitBtn) { submitBtn.disabled = true; submitBtn.dataset.label = submitBtn.textContent; submitBtn.textContent = "Sending…"; }

      fetch(endpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      })
        .then(function (res) {
          if (res.ok) {
            if (statusEl) {
              statusEl.classList.add("is-success");
              statusEl.textContent = "Thanks! Your message is in — Tommy's team will be in touch soon.";
            }
            form.reset();
          } else {
            throw new Error("Bad response");
          }
        })
        .catch(function () {
          if (statusEl) {
            statusEl.classList.add("is-error");
            statusEl.innerHTML =
              "Something went wrong sending your message. Email <a href=\"mailto:coaching@texastommypoker.com\">coaching@texastommypoker.com</a> directly.";
          }
        })
        .finally(function () {
          if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = submitBtn.dataset.label || "Send"; }
        });
    });
  });
})();
