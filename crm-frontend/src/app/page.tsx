"use client";

import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <Box sx={{ minHeight: "100vh", overflow: "hidden" }}>

      {/* ── Navbar ── */}
      <Box sx={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        px: { xs: 3, md: 8 }, py: 2,
        position: "absolute", top: 0, left: 0, right: 0, zIndex: 100,
      }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box sx={{
            width: 32, height: 32, borderRadius: 1.5,
            background: "linear-gradient(135deg, #6c63ff, #a78bfa)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <Typography sx={{ color: "#fff", fontWeight: 800, fontSize: 15 }}>C</Typography>
          </Box>
          <Typography sx={{ fontWeight: 800, fontSize: 20, color: "#fff" }}>CRM</Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button onClick={() => router.push("/login")} sx={{
            textTransform: "none", borderRadius: 2,
            border: "1px solid rgba(255,255,255,0.5)",
            color: "#fff", fontWeight: 600, px: 3, fontSize: 13,
            "&:hover": { bgcolor: "rgba(255,255,255,0.1)" }
          }}>Login</Button>
          <Button onClick={() => router.push("/register")} sx={{
            textTransform: "none", borderRadius: 2,
            bgcolor: "#fff", color: "#6c63ff",
            fontWeight: 700, px: 3, fontSize: 13,
            "&:hover": { bgcolor: "#f3f0ff" }
          }}>Get Started</Button>
        </Box>
      </Box>

      {/* ── Hero Section ── */}
      <Box sx={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        px: { xs: 3, md: 10 },
        pt: { xs: 12, md: 0 },
        gap: 6,
        backgroundImage: `url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, rgba(168, 166, 206, 0.75) 0%, rgba(26,26,46,0.65) 100%)",
          zIndex: 0,
        },
      }}>

        {/* Left Content */}
        <Box sx={{ position: "relative", zIndex: 1, flex: 1 }}>
          <Box sx={{
            display: "inline-flex", alignItems: "center", gap: 1,
            bgcolor: "rgba(255,255,255,0.15)",
            border: "1px solid rgba(255,255,255,0.25)",
            borderRadius: 5, px: 2, py: 0.5, mb: 3,
          }}>
            <Box sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: "#fff" }} />
            <Typography sx={{ fontSize: 11, color: "#fff", fontWeight: 600 }}>
              Modern CRM Platform
            </Typography>
          </Box>

          <Typography sx={{
            fontSize: { xs: 36, md: 56 }, fontWeight: 800,
            color: "#fff", lineHeight: 1.15, mb: 2, letterSpacing: "-1px"
          }}>
            Manage Leads.
            <br />
            Close More Deals.
          </Typography>

          <Typography sx={{
            fontSize: 15, color: "rgba(255,255,255,0.75)",
            maxWidth: 400, mb: 4, lineHeight: 1.8
          }}>
            Track leads, manage deals, handle tickets — all in one place.
          </Typography>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Button onClick={() => router.push("/register")} sx={{
              textTransform: "none", borderRadius: 2,
              bgcolor: "#fff", color: "#6c63ff",
              fontWeight: 700, px: 4, py: 1.4, fontSize: 14,
              boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
              "&:hover": { bgcolor: "#f3f0ff" }
            }}>Get Started Free →</Button>
            <Button onClick={() => router.push("/login")} sx={{
              textTransform: "none", borderRadius: 2,
              border: "1px solid rgba(255,255,255,0.4)",
              color: "#fff", fontWeight: 600, px: 4, py: 1.4, fontSize: 14,
              "&:hover": { bgcolor: "rgba(255,255,255,0.1)" }
            }}>Sign In</Button>
          </Box>

          {/* Stats */}
          <Box sx={{ display: "flex", gap: 4, mt: 5 }}>
            {[
              { value: "10K+", label: "Users" },
              { value: "98%", label: "Satisfaction" },
              { value: "2x", label: "Faster Closing" },
            ].map((stat) => (
              <Box key={stat.label}>
                <Typography sx={{ fontSize: 24, fontWeight: 800, color: "#fff" }}>{stat.value}</Typography>
                <Typography sx={{ fontSize: 11, color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>{stat.label}</Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Right — Dashboard Preview */}
        <Box sx={{ position: "relative", zIndex: 1, flex: 1, display: { xs: "none", md: "block" }, transform: "scale(0.78)", transformOrigin: "center right" }}>
          <Box sx={{
            bgcolor: "#fff", borderRadius: 4,
            boxShadow: "0 40px 100px rgba(0,0,0,0.4)",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.3)",
          }}>
            {/* Browser bar */}
            <Box sx={{
              display: "flex", alignItems: "center", gap: 1,
              px: 2, py: 1.5, bgcolor: "#f0f0f0",
              borderBottom: "1px solid #e5e5e5",
            }}>
              <Box sx={{ width: 11, height: 11, borderRadius: "50%", bgcolor: "#ff5f57" }} />
              <Box sx={{ width: 11, height: 11, borderRadius: "50%", bgcolor: "#febc2e" }} />
              <Box sx={{ width: 11, height: 11, borderRadius: "50%", bgcolor: "#28c840" }} />
              <Box sx={{
                flex: 1, height: 22, bgcolor: "#fff",
                borderRadius: 1, ml: 1,
                display: "flex", alignItems: "center", px: 1.5,
                border: "1px solid #e0e0e0",
              }}>
                <Typography sx={{ fontSize: 10, color: "#999" }}>🔒 localhost:3000/dashboard</Typography>
              </Box>
            </Box>

            <Box sx={{ p: 3 }}>
              {/* Header */}
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2.5 }}>
                <Box>
                  <Typography sx={{ fontSize: 16, fontWeight: 800, color: "#1a1a2e" }}>Dashboard</Typography>
                  <Typography sx={{ fontSize: 10, color: "#aaa" }}>Welcome back 👋</Typography>
                </Box>
                <Box sx={{
                  background: "linear-gradient(135deg, #6c63ff, #a78bfa)",
                  color: "#fff", fontSize: 11, fontWeight: 700,
                  px: 2, py: 0.6, borderRadius: 2,
                  boxShadow: "0 4px 12px rgba(108,99,255,0.3)",
                }}>+ Create</Box>
              </Box>

              {/* Stats */}
              <Box sx={{ display: "flex", gap: 1.5, mb: 2.5 }}>
                {[
                  { label: "Total Leads", value: "1,284", color: "#6c63ff", bg: "#f3f0ff", icon: "👥" },
                  { label: "Active Deals", value: "$428K", color: "#10b981", bg: "#f0fdf4", icon: "💼" },
                  { label: "Tickets", value: "37", color: "#f59e0b", bg: "#fffbeb", icon: "🎫" },
                  { label: "Companies", value: "156", color: "#3b82f6", bg: "#eff6ff", icon: "🏢" },
                ].map((card) => (
                  <Box key={card.label} sx={{
                    flex: 1, bgcolor: card.bg,
                    borderRadius: 2.5, p: 1.5,
                    border: `1px solid ${card.color}20`,
                  }}>
                    <Typography sx={{ fontSize: 13, mb: 0.5 }}>{card.icon}</Typography>
                    <Typography sx={{ fontSize: 16, fontWeight: 800, color: card.color, lineHeight: 1 }}>{card.value}</Typography>
                    <Typography sx={{ fontSize: 9, color: "#999", mt: 0.3, fontWeight: 500 }}>{card.label}</Typography>
                  </Box>
                ))}
              </Box>

              {/* Table */}
              <Box sx={{ borderRadius: 2.5, overflow: "hidden", border: "1px solid #f0f0f0" }}>
                <Box sx={{ display: "flex", px: 2, py: 1.2, background: "linear-gradient(135deg, #6c63ff, #a78bfa)" }}>
                  {["Deal Name", "Stage", "Amount", "Owner"].map((h) => (
                    <Typography key={h} sx={{ flex: 1, fontSize: 10, color: "#fff", fontWeight: 700 }}>{h}</Typography>
                  ))}
                </Box>
                {[
                  { name: "Cloud Migration", stage: "Qualified", amount: "$28K", owner: "Naifa", color: "#6c63ff", bg: "#f3f0ff" },
                  { name: "Mobile App", stage: "Proposal", amount: "$15K", owner: "Aalam", color: "#10b981", bg: "#f0fdf4" },
                  { name: "CRM Onboarding", stage: "Closed Won", amount: "$32K", owner: "Naifa", color: "#10b981", bg: "#f0fdf4" },
                  { name: "ERP Integration", stage: "Contract", amount: "$41K", owner: "Naifa", color: "#f59e0b", bg: "#fffbeb" },
                ].map((row, i) => (
                  <Box key={row.name} sx={{
                    display: "flex", px: 2, py: 1.2,
                    bgcolor: i % 2 === 0 ? "#fff" : "#fafafa",
                    borderBottom: "1px solid #f5f5f5",
                    "&:hover": { bgcolor: "#f3f0ff" }
                  }}>
                    <Typography sx={{ flex: 1, fontSize: 11, color: "#1a1a2e", fontWeight: 600 }}>{row.name}</Typography>
                    <Box sx={{ flex: 1 }}>
                      <Box sx={{ display: "inline-flex", alignItems: "center", bgcolor: row.bg, px: 1, py: 0.3, borderRadius: 1, border: `1px solid ${row.color}30` }}>
                        <Typography sx={{ fontSize: 9, fontWeight: 700, color: row.color }}>{row.stage}</Typography>
                      </Box>
                    </Box>
                    <Typography sx={{ flex: 1, fontSize: 11, color: "#1a1a2e", fontWeight: 700 }}>{row.amount}</Typography>
                    <Box sx={{ flex: 1, display: "flex", alignItems: "center", gap: 0.5 }}>
                      <Box sx={{ width: 16, height: 16, borderRadius: "50%", background: "linear-gradient(135deg, #6c63ff, #a78bfa)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Typography sx={{ fontSize: 8, color: "#fff", fontWeight: 700 }}>{row.owner[0]}</Typography>
                      </Box>
                      <Typography sx={{ fontSize: 11, color: "#666" }}>{row.owner}</Typography>
                    </Box>
                  </Box>
                ))}
              </Box>

              {/* Bottom bar */}
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 2 }}>
                <Typography sx={{ fontSize: 10, color: "#bbb" }}>Showing 4 of 18 deals</Typography>
                <Box sx={{ display: "flex", gap: 0.5 }}>
                  {[1, 2, 3].map((i) => (
                    <Box key={i} sx={{ width: 20, height: 20, borderRadius: 1, bgcolor: i === 1 ? "#6c63ff" : "#f0f0f0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Typography sx={{ fontSize: 9, color: i === 1 ? "#fff" : "#aaa", fontWeight: 600 }}>{i}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

      </Box>
      {/* ── End Hero ── */}

      {/* ── Features Section ── */}
<Box sx={{ px: { xs: 3, md: 10 }, py: { xs: 6, md: 10 }, background: "linear-gradient(135deg, #a491ed 0%, #eff6ff 100%)" }}>
  <Box sx={{ textAlign: "center", mb: 6 }}>
    <Typography sx={{ fontSize: { xs: 24, md: 36 }, fontWeight: 800, color: "#1a1a2e", mb: 1, letterSpacing: "-0.5px" }}>
      Everything in one place
    </Typography>
    <Typography sx={{ fontSize: 14, color: "#888" }}>
      Built for modern sales teams
    </Typography>
  </Box>

  <Box sx={{ display: "flex", gap: 2.5, flexWrap: "wrap", justifyContent: "center" }}>
    {[
      { icon: "👥", title: "Lead Management", desc: "Track, filter and convert leads into deals effortlessly.", color: "#6c63ff" },
      { icon: "💼", title: "Deal Pipeline", desc: "Manage deals from first contact to closed won with ease.", color: "#10b981" },
      { icon: "🏢", title: "Companies", desc: "Organize all company relationships and track interactions.", color: "#3b82f6" },
      { icon: "🎫", title: "Ticket Support", desc: "Handle customer issues with priority and status tracking.", color: "#f59e0b" },
      { icon: "📊", title: "Analytics", desc: "Get real-time insights into your team's performance.", color: "#8b5cf6" },
      { icon: "⚡", title: "Activities", desc: "Log calls, emails, tasks and meetings in one place.", color: "#ef4444" },
    ].map((feature) => (
      <Box key={feature.title} sx={{
        width: { xs: "100%", sm: "calc(50% - 10px)", md: "calc(33% - 14px)" },
        bgcolor: "#fff",
        borderRadius: 3, p: 3,
        borderTop: `3px solid ${feature.color}`,
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
        transition: "all 0.2s",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: `0 12px 32px ${feature.color}20`,
        }
      }}>
        <Typography sx={{ fontSize: 30, mb: 1.5 }}>{feature.icon}</Typography>
        <Typography sx={{ fontSize: 14, fontWeight: 700, color: "#1a1a2e", mb: 0.8 }}>
          {feature.title}
        </Typography>
        <Typography sx={{ fontSize: 12, color: "#999", lineHeight: 1.7 }}>
          {feature.desc}
        </Typography>
      </Box>
    ))}
  </Box>
</Box>

      {/* ── CTA ── */}
      <Box sx={{
        mx: { xs: 3, md: 10 }, my: { xs: 6, md: 8 },
        background: "linear-gradient(135deg, #6c63ff, #a78bfa)",
        borderRadius: 4, p: { xs: 4, md: 5 },
        textAlign: "center",
        boxShadow: "0 16px 48px rgba(108,99,255,0.25)",
      }}>
        <Typography sx={{ fontSize: { xs: 22, md: 30 }, fontWeight: 800, color: "#fff", mb: 1 }}>
          Start managing smarter today
        </Typography>
        <Typography sx={{ fontSize: 14, color: "rgba(255,255,255,0.75)", mb: 3 }}>
          Free to get started. No credit card required.
        </Typography>
        <Button onClick={() => router.push("/register")} sx={{
          textTransform: "none", borderRadius: 2,
          bgcolor: "#fff", color: "#6c63ff",
          fontWeight: 700, px: 5, py: 1.4, fontSize: 14,
          "&:hover": { bgcolor: "#f3f0ff" }
        }}>
          Get Started Free →
        </Button>
      </Box>

      {/* ── Footer ── */}
      <Box sx={{
        px: { xs: 3, md: 10 }, py: 3,
        borderTop: "1px solid #eeeeee",
        display: "flex", justifyContent: "space-between",
        alignItems: "center", bgcolor: "#fff",
      }}>
        <Typography sx={{ fontWeight: 800, fontSize: 15, color: "#1a1a2e" }}>CRM</Typography>
        <Typography sx={{ fontSize: 12, color: "#bbb" }}>© 2026 CRM. All rights reserved.</Typography>
      </Box>

    </Box>
  );
}