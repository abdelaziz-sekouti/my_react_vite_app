import React from "react";
import PropTypes from "prop-types";
import { Container, Paper } from "@mui/material";
/**
 * Sample testimonials array — import and pass to <Testemonials />
 *
 * Example:
 *   import { sampleTestimonials } from "./Testemonials";
 *   <Testemonials testimonials={testimonials} />
 */

const wrapper = {
  maxWidth: 1000,
  margin: "40px auto",
  padding: "0 20px",
  fontFamily: "Inter, Roboto, system-ui, -apple-system, 'Segoe UI', Arial",
  color: "#0f172a",
};

const heading = {
  marginBottom: 8,
  fontSize: 24,
  fontWeight: 700,
};

const subtitle = {
  marginBottom: 20,
  color: "#475569",
  fontSize: 14,
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: 16,
};

const card = {
  background: "#fff",
  borderRadius: 10,
  padding: 16,
  boxShadow: "0 6px 18px rgba(2,6,23,0.06)",
  display: "flex",
  flexDirection: "column",
  gap: 12,
  minHeight: 140,
};

const avatarWrap = {
  display: "flex",
  alignItems: "center",
  gap: 12,
};

const avatar = (bg = "#0ea5a6") => ({
  width: 48,
  height: 48,
  borderRadius: "50%",
  background: bg,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  fontWeight: 700,
  fontSize: 16,
  flexShrink: 0,
});

const nameStyle = { fontSize: 15, fontWeight: 600 };
const roleStyle = { fontSize: 13, color: "#64748b" };
const quote = { fontSize: 14, color: "#0f172a", lineHeight: 1.4 };

function Testemonials({ testimonials }) {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Paper elevation={6} sx={{ p: 4 }}>
        <section style={wrapper} aria-labelledby="testemonials-heading">
          <h2 id="testemonials-heading" style={heading}>
            Testimonials
          </h2>
          <p style={subtitle}>
            Real feedback from readers and collaborators. Short, honest
            reflections to help you understand the value we deliver.
          </p>

          <div style={grid}>
            {testimonials.map((t, i) => {
              const initials =
                !t.avatar && t.name
                  ? t.name
                      .split(" ")
                      .map((s) => s[0])
                      .slice(0, 2)
                      .join("")
                      .toUpperCase()
                  : null;
              // pick a pleasant background color based on index
              const colors = [
                "#0ea5a6",
                "#6366f1",
                "#ef4444",
                "#f59e0b",
                "#10b981",
              ];
              const bg = colors[i % colors.length];

              return (
                <article
                  key={t.id ?? i}
                  style={card}
                  aria-label={`Testimonial by ${t.name}`}
                >
                  <div style={avatarWrap}>
                    {t.avatar ? (
                      <img
                        src={t.avatar}
                        alt={`${t.name} avatar`}
                        style={{
                          width: 48,
                          height: 48,
                          borderRadius: "50%",
                          objectFit: "cover",
                        }}
                      />
                    ) : (
                      <div style={avatar(bg)} aria-hidden>
                        {initials}
                      </div>
                    )}

                    <div>
                      <div style={nameStyle}>{t.name}</div>
                      <div style={roleStyle}>{t.role}</div>
                    </div>
                  </div>

                  <blockquote style={{ margin: 0, ...quote }}>
                    "{t.text}"
                  </blockquote>

                  <div
                    style={{ marginTop: "auto", color: "#f59e0b" }}
                    aria-hidden
                  >
                    {Array.from({ length: t.stars ?? 5 }).map((_, s) => (
                      <span key={s} style={{ marginRight: 2 }}>
                        ★
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </Paper>
    </Container>
  );
}

Testemonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      name: PropTypes.string.isRequired,
      role: PropTypes.string,
      text: PropTypes.string.isRequired,
      avatar: PropTypes.string,
      stars: PropTypes.number,
    })
  ),
};

Testemonials.defaultProps = {
  testimonials: [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Content Editor",
      text: "This blog consistently delivers thoughtful content. Design and clarity are top notch.",
      stars: 5,
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Frontend Dev",
      text: "Great code examples and approachable explanations — helped me ship features faster.",
      stars: 5,
    },
    {
      id: 3,
      name: "Samuel Lee",
      role: "Product Manager",
      text: "Clear insights and practical tips backed by real experience. Highly recommend following.",
      stars: 4,
    },
  ],
};

export default Testemonials;
