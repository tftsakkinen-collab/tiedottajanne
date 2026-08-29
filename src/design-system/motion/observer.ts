/**
 * IntersectionObserver utility for data-reveal elements.
 * T0: CSS 150-240ms
 * T1: [data-reveal] default visible + IO utility (reduced-motion -> instant)
 */
export function initScrollReveal(): () => void {
  if (typeof window === "undefined") return () => {};

  // Check prefers-reduced-motion
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  
  const revealElements = document.querySelectorAll<HTMLElement>("[data-reveal]");

  if (prefersReducedMotion) {
    revealElements.forEach((el) => el.classList.add("in"));
    return () => {};
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  revealElements.forEach((el) => observer.observe(el));

  return () => {
    observer.disconnect();
  };
}
