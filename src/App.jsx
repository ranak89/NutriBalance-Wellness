import { useState, useEffect } from "react";

// ── DESIGN TOKENS ─────────────────────────────────────────────────────────────
const D = {
  banyan:    "#0f1f12",   // very dark green — nav, footer
  cream:     "#f7efde",   // turmeric cream — main bg
  bgAlt:     "#edf4ee",   // botanical light — alternating sections
  forest:    "#1d5c35",   // forest dal — headings
  saffron:   "#b5720a",   // raw saffron — CTAs, accents
  saffHover: "#9a6009",   // deep saffron on hover
  marigold:  "#e8c97a",   // marigold — decorative
  tamarind:  "#5a2535",   // tamarind — secondary accent
  text:      "#141414",   // body text
  textMid:   "#3d4e40",   // secondary body
  textLight: "#6b7c6e",   // muted
  border:    "rgba(29,92,53,0.13)",
  cardBorder:"rgba(29,92,53,0.18)",
  white:     "#ffffff",
};

// ── LOTUS SVG ─────────────────────────────────────────────────────────────────
const Lotus = ({ size = 480, opacity = 0.065 }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" fill="none"
    xmlns="http://www.w3.org/2000/svg" style={{ opacity, display: "block" }}>
    {[0,30,60,90,120,150,180,210,240,270,300,330].map(a => (
      <ellipse key={a} cx="100" cy="50" rx="13" ry="56"
        stroke={D.saffron} strokeWidth="0.7"
        fill={D.marigold} fillOpacity="0.25"
        transform={`rotate(${a} 100 100)`} />
    ))}
    <circle cx="100" cy="100" r="18" stroke={D.saffron} strokeWidth="1" fill={D.marigold} fillOpacity="0.45"/>
    <circle cx="100" cy="100" r="9"  fill={D.saffron} fillOpacity="0.5"/>
  </svg>
);

// ── TINY DIVIDER ──────────────────────────────────────────────────────────────
const Sprig = () => (
  <div style={{ textAlign:"center", margin:"0 0 56px", color: D.marigold, fontSize: 22, letterSpacing: 8 }}>
    ✦ ✦ ✦
  </div>
);

// ── DATA ──────────────────────────────────────────────────────────────────────
const PACKAGES = [
  {
    name:"Starter Spark", price:"$97 CAD", period:"single session",
    tag:"", color: D.forest,
    desc:"One focused session to get clear on your nutrition direction — without overhauling everything.",
    items:["60-min 1:1 Zoom call","South Asian food assessment","3 immediate action steps","7-day email support","Session recording"],
    launch:"Launch price: $47 for first 5 clients",
    cta:"Book This Session",
  },
  {
    name:"NutriBalance Core", price:"$297 CAD", period:"per month",
    tag:"Most Popular", color: D.saffron,
    desc:"Four weekly coaching calls, WhatsApp support, and a plan built entirely around your cultural foods.",
    items:["4 × 45-min weekly calls","Personalized nutrition plan (your foods, your plate)","WhatsApp Mon–Fri support","South Asian grocery guide — Canada","Traditional recipe modifications","Session recordings"],
    launch:"Launch price: $147/mo for first 3 clients",
    cta:"Start This Month",
  },
  {
    name:"Heritage Transformation", price:"$697 CAD", period:"3 months",
    tag:"Best Value", color: D.tamarind,
    desc:"Twelve weeks to completely rebuild your relationship with food — sustainably, culturally, permanently.",
    items:["12 × 45-min weekly calls","Full 3-month personal roadmap","WhatsApp + email support","50+ traditional South Asian recipe database","Festive season navigation guide (Diwali, Eid, Christmas)","Family meal integration strategy","Post-program maintenance plan"],
    launch:"Launch price: $347 for first 2 clients",
    cta:"Apply Now",
  },
];

const FAQS = [
  { q:"What does PN1 Certified mean, exactly?",
    a:"Precision Nutrition Level 1 (PN1) is one of North America's most respected nutrition coaching certifications, grounded in sports science and behaviour change. In Ontario, I work as a 'Nutrition Coach' — not a Registered Dietitian (a regulated title). That means personalized coaching, education, and habit change — not clinical diagnosis or medical nutrition therapy." },
  { q:"Do I have to give up rice, roti, or my South Asian food?",
    a:"No — and this is the entire point. Generic nutrition advice treats South Asian food as the problem. I treat it as the foundation. We work with dal, dahi, haldi, sabji, and everything else already on your table. The goal is to understand your food better, not eliminate it." },
  { q:"I'm not in Kitchener — can I still work with you?",
    a:"All sessions are virtual via Zoom. I work with South Asian women across Canada — Toronto, Vancouver, Calgary, Edmonton, Ottawa — and internationally. Grocery guidance is Canada-specific; I know the South Asian grocery landscape in major Canadian cities." },
  { q:"How much time does this actually take weekly?",
    a:"One 45-minute call plus 10–15 minutes of daily practice. Everything is designed for real life: a toddler in the next room, a full-time job, family commitments. I don't build protocols that only work on paper." },
  { q:"What if I'm not sure this is right for me?",
    a:"That's exactly what the free 20-minute Discovery Call is for. We talk, I ask questions, you ask yours, and I give you an honest recommendation — including if I think another resource would serve you better. No pressure, no pitch." },
];

const PILLARS = [
  { icon:"🌿", title:"Your culture is the curriculum",
    body:"Dal, dahi, haldi, methi — these aren't obstacles to your health goals. They're the foundation. Every plan starts with what's already on your plate, not what should replace it." },
  { icon:"🔬", title:"Science that explains your dadi",
    body:"PN1 Precision Nutrition training meets generations of South Asian dietary wisdom. You get the evidence base that finally explains why traditional practices work — and how to apply them with intention." },
  { icon:"🇨🇦", title:"Real life in Canada",
    body:"Navigating Chalo FreshCo and T&T. Eating at Indian weddings and office potlucks. Managing South Asian family food pressure in a Canadian context. Real life, not a lab experiment." },
];

// ── COMPONENTS ────────────────────────────────────────────────────────────────

function Nav({ menuOpen, setMenuOpen }) {
  return (
    <nav style={{
      position:"fixed", top:0, left:0, right:0, zIndex:100,
      background: D.banyan,
      borderBottom:`1px solid rgba(232,201,122,0.15)`,
      padding:"0 24px",
    }}>
      <div style={{
        maxWidth:1100, margin:"0 auto",
        display:"flex", alignItems:"center", justifyContent:"space-between",
        height:64,
      }}>
        {/* Logo */}
        <div>
          <div style={{ fontFamily:"'Cormorant Garant',serif", fontSize:20, fontWeight:700, color: D.marigold, lineHeight:1 }}>
            NutriBalance Wellness
          </div>
          <div style={{ fontFamily:"'DM Mono',monospace", fontSize:9, color:"rgba(232,201,122,0.55)", letterSpacing:3, marginTop:2 }}>
            HERITAGE NUTRITION
          </div>
        </div>

        {/* Desktop links */}
        <div style={{ display:"flex", gap:32, "@media(maxWidth:768px)":{display:"none"} }}>
          {["About","Services","How It Works","FAQ"].map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(/ /g,"-")}`}
              style={{ fontFamily:"'DM Sans',sans-serif", fontSize:13, color:"rgba(232,201,122,0.75)", textDecoration:"none", fontWeight:500, letterSpacing:0.3, transition:"color 0.2s" }}
              onMouseEnter={e=>e.target.style.color=D.marigold}
              onMouseLeave={e=>e.target.style.color="rgba(232,201,122,0.75)"}>
              {l}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a href="#book" style={{
          background: D.saffron, color: D.white,
          fontFamily:"'DM Sans',sans-serif", fontSize:13, fontWeight:600,
          padding:"10px 22px", borderRadius:6, textDecoration:"none",
          transition:"background 0.2s", letterSpacing:0.3,
        }}
          onMouseEnter={e=>e.target.style.background=D.saffHover}
          onMouseLeave={e=>e.target.style.background=D.saffron}>
          Book Free Call
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section style={{
      background: D.cream, paddingTop:120, paddingBottom:100,
      position:"relative", overflow:"hidden",
      minHeight: "92vh", display:"flex", alignItems:"center",
    }}>
      {/* Lotus watermark — the signature element */}
      <div style={{ position:"absolute", right:"-4%", top:"50%", transform:"translateY(-50%)", pointerEvents:"none", zIndex:0 }}>
        <Lotus size={600} opacity={0.07}/>
      </div>

      <div style={{ maxWidth:1100, margin:"0 auto", padding:"0 24px", position:"relative", zIndex:1, width:"100%" }}>
        {/* Eyebrow */}
        <div style={{
          fontFamily:"'DM Mono',monospace", fontSize:11, color: D.saffron,
          letterSpacing:4, marginBottom:28, textTransform:"uppercase",
        }}>
          PN1 Certified Nutrition Coach &nbsp;·&nbsp; Kitchener, ON &nbsp;·&nbsp; Virtual Worldwide
        </div>

        {/* Headline — the typographic statement */}
        <h1 style={{ margin:"0 0 12px", lineHeight:0.95 }}>
          <span style={{
            display:"block",
            fontFamily:"'Cormorant Garant',serif",
            fontSize:"clamp(52px,8vw,112px)",
            fontWeight:700, fontStyle:"italic",
            color: D.saffron,
          }}>
            Your heritage.
          </span>
          <span style={{
            display:"block",
            fontFamily:"'Cormorant Garant',serif",
            fontSize:"clamp(52px,8vw,112px)",
            fontWeight:700,
            color: D.forest,
          }}>
            Your strength.
          </span>
        </h1>

        <p style={{
          fontFamily:"'DM Sans',sans-serif",
          fontSize:"clamp(16px,2vw,21px)",
          color: D.textMid, maxWidth:520,
          lineHeight:1.65, margin:"28px 0 44px",
          fontWeight:400,
        }}>
          Nutrition coaching for South Asian women in Canada — built around
          your culture, your kitchen, and your real life. Not someone else's meal plan.
        </p>

        <div style={{ display:"flex", gap:14, flexWrap:"wrap" }}>
          <a id="book" href="https://calendly.com/nutribalancewellness" target="_blank" rel="noreferrer"
            style={{
              display:"inline-block",
              background: D.saffron, color: D.white,
              fontFamily:"'DM Sans',sans-serif", fontSize:15, fontWeight:600,
              padding:"16px 36px", borderRadius:6, textDecoration:"none",
              letterSpacing:0.3,
            }}>
            Book Free 20-Min Discovery Call
          </a>
          <a href="#services"
            style={{
              display:"inline-block",
              background:"transparent", color: D.forest,
              border:`1.5px solid ${D.forest}`,
              fontFamily:"'DM Sans',sans-serif", fontSize:15, fontWeight:500,
              padding:"16px 28px", borderRadius:6, textDecoration:"none",
              letterSpacing:0.3,
            }}>
            See Coaching Packages →
          </a>
        </div>

        {/* Trust badges */}
        <div style={{ display:"flex", gap:28, marginTop:52, flexWrap:"wrap" }}>
          {[
            { n:"PN1", label:"Certified Nutrition Coach" },
            { n:"100%", label:"Culturally-informed plans" },
            { n:"Virtual", label:"Canada-wide & international" },
          ].map(b => (
            <div key={b.n}>
              <div style={{ fontFamily:"'Cormorant Garant',serif", fontSize:28, fontWeight:700, color: D.forest, lineHeight:1 }}>{b.n}</div>
              <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:12, color: D.textLight, marginTop:3 }}>{b.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProblemBand() {
  return (
    <section style={{ background: D.banyan, padding:"56px 24px" }}>
      <div style={{ maxWidth:800, margin:"0 auto", textAlign:"center" }}>
        <p style={{
          fontFamily:"'Cormorant Garant',serif",
          fontSize:"clamp(22px,3.5vw,36px)",
          fontWeight:600, fontStyle:"italic",
          color: D.marigold, lineHeight:1.5, margin:0,
        }}>
          "Most nutrition advice was designed for someone else's kitchen,
          someone else's culture, and someone else's body."
        </p>
        <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:14, color:"rgba(232,201,122,0.5)", marginTop:20, letterSpacing:1 }}>
          — That ends here.
        </p>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" style={{ background: D.cream, padding:"96px 24px" }}>
      <div style={{ maxWidth:1100, margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:72, alignItems:"center" }}>

        {/* Photo placeholder */}
        <div style={{ position:"relative" }}>
          <div style={{
            width:"100%", aspectRatio:"4/5",
            background:`linear-gradient(145deg, ${D.bgAlt}, #d4e8d8)`,
            borderRadius:4,
            display:"flex", alignItems:"center", justifyContent:"center",
            position:"relative", overflow:"hidden",
          }}>
            <div style={{ textAlign:"center", color: D.textLight }}>
              <div style={{ fontSize:64, marginBottom:12, opacity:0.4 }}>🌿</div>
              <div style={{ fontFamily:"'DM Mono',monospace", fontSize:10, letterSpacing:3, opacity:0.5 }}>PHOTO OF SUCHANDRA</div>
            </div>
            {/* Decorative corner */}
            <div style={{
              position:"absolute", bottom:24, right:24,
              background: D.banyan, color: D.marigold,
              padding:"12px 18px", borderRadius:4,
              fontFamily:"'DM Mono',monospace", fontSize:10, letterSpacing:2,
            }}>
              PN1 CERTIFIED
            </div>
          </div>
          {/* Offset accent box */}
          <div style={{
            position:"absolute", top:-16, left:-16,
            width:80, height:80,
            border:`2px solid ${D.marigold}`, borderRadius:4, zIndex:-1, opacity:0.5,
          }}/>
        </div>

        {/* Story */}
        <div>
          <div style={{ fontFamily:"'DM Mono',monospace", fontSize:11, color: D.saffron, letterSpacing:4, marginBottom:20 }}>
            ABOUT SUCHANDRA
          </div>
          <h2 style={{
            fontFamily:"'Cormorant Garant',serif",
            fontSize:"clamp(32px,4vw,52px)",
            fontWeight:700, color: D.forest,
            lineHeight:1.1, margin:"0 0 24px",
          }}>
            The coaching I needed<br/>
            <em style={{ fontStyle:"italic", color: D.saffron }}>didn't exist.</em><br/>
            So I built it.
          </h2>
          <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
            {[
              "I'm Suchandra Das Ghosh — PN1 Certified Nutrition Coach, mom to a 16-month-old, founder of NutriBalance Wellness, and maker of traditional Mishti Dahi.",
              "After leaving my career due to pregnancy complications and moving to Canada, I spent years frustrated by nutrition advice that treated South Asian food as the problem — too starchy, too oily, too much rice.",
              "So I trained with Precision Nutrition, not to abandon what I knew, but to understand it scientifically. What I found: the problem was never the food. It was the advice.",
              "NutriBalance Wellness exists for every South Asian woman who's been told to eat less of the food that connects her to her family, her culture, and herself.",
            ].map((p, i) => (
              <p key={i} style={{ fontFamily:"'DM Sans',sans-serif", fontSize:15, color: D.textMid, lineHeight:1.8, margin:0 }}>{p}</p>
            ))}
          </div>
          <div style={{ marginTop:36, display:"flex", gap:36 }}>
            {[{v:"PN1",l:"Precision Nutrition"},{v:"2023",l:"Coaching since"},{v:"100%",l:"Virtual access"}].map(s=>(
              <div key={s.v}>
                <div style={{ fontFamily:"'Cormorant Garant',serif", fontSize:32, fontWeight:700, color:D.forest }}>{s.v}</div>
                <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:12, color:D.textLight, marginTop:2 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Pillars() {
  return (
    <section style={{ background: D.bgAlt, padding:"96px 24px" }}>
      <div style={{ maxWidth:1100, margin:"0 auto" }}>
        <div style={{ textAlign:"center", marginBottom:64 }}>
          <div style={{ fontFamily:"'DM Mono',monospace", fontSize:11, color:D.saffron, letterSpacing:4, marginBottom:16 }}>WHY DIFFERENT</div>
          <h2 style={{ fontFamily:"'Cormorant Garant',serif", fontSize:"clamp(32px,4vw,52px)", fontWeight:700, color:D.forest, margin:0 }}>
            What makes NutriBalance<br/><em style={{fontStyle:"italic",color:D.saffron}}>Wellness work</em>
          </h2>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:32 }}>
          {PILLARS.map((p,i) => (
            <div key={i} style={{
              background:D.white, borderRadius:4,
              padding:"40px 36px",
              border:`1px solid ${D.cardBorder}`,
              borderTop:`3px solid ${D.saffron}`,
            }}>
              <div style={{ fontSize:36, marginBottom:20 }}>{p.icon}</div>
              <h3 style={{ fontFamily:"'Cormorant Garant',serif", fontSize:26, fontWeight:700, color:D.forest, margin:"0 0 14px", lineHeight:1.2 }}>{p.title}</h3>
              <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:14, color:D.textMid, lineHeight:1.8, margin:0 }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const [hov, setHov] = useState(null);
  return (
    <section id="services" style={{ background:D.cream, padding:"96px 24px" }}>
      <div style={{ maxWidth:1100, margin:"0 auto" }}>
        <div style={{ textAlign:"center", marginBottom:64 }}>
          <div style={{ fontFamily:"'DM Mono',monospace", fontSize:11, color:D.saffron, letterSpacing:4, marginBottom:16 }}>COACHING PACKAGES</div>
          <h2 style={{ fontFamily:"'Cormorant Garant',serif", fontSize:"clamp(32px,4vw,52px)", fontWeight:700, color:D.forest, margin:"0 0 16px" }}>
            Choose your starting point
          </h2>
          <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:15, color:D.textLight, maxWidth:480, margin:"0 auto" }}>
            Every package begins with a free 20-minute Discovery Call — no commitment, no pressure.
          </p>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:24, alignItems:"start" }}>
          {PACKAGES.map((pkg, i) => (
            <div key={i}
              onMouseEnter={()=>setHov(i)} onMouseLeave={()=>setHov(null)}
              style={{
                background:hov===i?`${pkg.color}08`:D.white,
                border:`1px solid ${hov===i?pkg.color:D.cardBorder}`,
                borderTop:`4px solid ${pkg.color}`,
                borderRadius:4, padding:"36px 32px",
                transition:"all 0.25s", position:"relative",
              }}>
              {pkg.tag && (
                <div style={{
                  position:"absolute", top:20, right:20,
                  background:pkg.color, color:D.white,
                  fontFamily:"'DM Mono',monospace", fontSize:9,
                  letterSpacing:2, padding:"4px 10px", borderRadius:3,
                }}>{pkg.tag.toUpperCase()}</div>
              )}
              <div style={{ fontFamily:"'DM Mono',monospace", fontSize:10, color:pkg.color, letterSpacing:3, marginBottom:12 }}>
                {pkg.period.toUpperCase()}
              </div>
              <h3 style={{ fontFamily:"'Cormorant Garant',serif", fontSize:28, fontWeight:700, color:D.forest, margin:"0 0 4px" }}>{pkg.name}</h3>
              <div style={{ fontFamily:"'Cormorant Garant',serif", fontSize:40, fontWeight:700, color:pkg.color, margin:"8px 0 20px", lineHeight:1 }}>
                {pkg.price}
              </div>
              <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:13, color:D.textMid, lineHeight:1.7, margin:"0 0 24px" }}>{pkg.desc}</p>
              <div style={{ borderTop:`1px solid ${D.border}`, paddingTop:20, marginBottom:24 }}>
                {pkg.items.map((item,j)=>(
                  <div key={j} style={{ display:"flex", gap:10, marginBottom:10, alignItems:"flex-start" }}>
                    <span style={{ color:pkg.color, flexShrink:0, marginTop:1 }}>✓</span>
                    <span style={{ fontFamily:"'DM Sans',sans-serif", fontSize:13, color:D.textMid }}>{item}</span>
                  </div>
                ))}
              </div>
              <div style={{
                background:`${pkg.color}10`, border:`1px solid ${pkg.color}30`,
                borderRadius:4, padding:"10px 14px", marginBottom:24,
                fontFamily:"'DM Sans',sans-serif", fontSize:12, color:pkg.color, fontWeight:600,
              }}>
                🚀 {pkg.launch}
              </div>
              <a href="#book" style={{
                display:"block", textAlign:"center",
                background:pkg.color, color:D.white,
                fontFamily:"'DM Sans',sans-serif", fontSize:14, fontWeight:600,
                padding:"14px", borderRadius:4, textDecoration:"none",
                letterSpacing:0.3,
              }}>{pkg.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { label:"Book your free call", body:"A 20-minute Zoom conversation. No forms, no homework. I ask about your life, your food, your goals. You ask me anything." },
    { label:"We build your plan", body:"Using your cultural foods, your schedule, your family's eating rhythms. No meal plans that require cooking three separate dinners." },
    { label:"You live it — with support", body:"Weekly calls plus WhatsApp support mean you're never stuck between sessions. Small adjustments in real time, not waiting until next week." },
  ];
  return (
    <section id="how-it-works" style={{ background:D.bgAlt, padding:"96px 24px" }}>
      <div style={{ maxWidth:900, margin:"0 auto" }}>
        <div style={{ textAlign:"center", marginBottom:72 }}>
          <div style={{ fontFamily:"'DM Mono',monospace", fontSize:11, color:D.saffron, letterSpacing:4, marginBottom:16 }}>THE PROCESS</div>
          <h2 style={{ fontFamily:"'Cormorant Garant',serif", fontSize:"clamp(32px,4vw,52px)", fontWeight:700, color:D.forest, margin:0 }}>
            How it actually works
          </h2>
        </div>
        <div style={{ position:"relative" }}>
          {/* Connecting line */}
          <div style={{ position:"absolute", left:"calc(50% - 0.5px)", top:40, bottom:40, width:1, background:D.border, display:"none" }}/>
          <div style={{ display:"flex", flexDirection:"column", gap:0 }}>
            {steps.map((s, i) => (
              <div key={i} style={{
                display:"flex", gap:32, alignItems:"flex-start",
                padding:"40px 0",
                borderBottom: i < 2 ? `1px solid ${D.border}` : "none",
              }}>
                <div style={{
                  flexShrink:0, width:64, height:64,
                  borderRadius:"50%", background:D.banyan,
                  display:"flex", alignItems:"center", justifyContent:"center",
                  fontFamily:"'Cormorant Garant',serif", fontSize:28, fontWeight:700, color:D.marigold,
                }}>
                  {i + 1}
                </div>
                <div>
                  <h3 style={{ fontFamily:"'Cormorant Garant',serif", fontSize:28, fontWeight:700, color:D.forest, margin:"0 0 10px", lineHeight:1.2 }}>{s.label}</h3>
                  <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:15, color:D.textMid, lineHeight:1.75, margin:0 }}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhoItsFor() {
  const fits = [
    "A South Asian woman in Canada confused by nutrition advice that ignores your food",
    "Dealing with low energy, digestive issues, or blood sugar concerns and want culturally-informed guidance",
    "Tired of meal plans built around foods you've never cooked and don't want to start",
    "A busy mother wanting sustainable habits — not a 90-day protocol you can't maintain",
    "Navigating family food pressure while trying to build your own healthy relationship with eating",
    "Ready to genuinely invest in your health — not just read tips and stay stuck",
  ];
  return (
    <section style={{ background:D.cream, padding:"96px 24px" }}>
      <div style={{ maxWidth:1100, margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:80, alignItems:"center" }}>
        <div>
          <div style={{ fontFamily:"'DM Mono',monospace", fontSize:11, color:D.saffron, letterSpacing:4, marginBottom:20 }}>WHO THIS IS FOR</div>
          <h2 style={{ fontFamily:"'Cormorant Garant',serif", fontSize:"clamp(32px,4vw,52px)", fontWeight:700, color:D.forest, margin:"0 0 40px", lineHeight:1.15 }}>
            If any of this<br/>sounds like you —
          </h2>
          <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
            {fits.map((f,i)=>(
              <div key={i} style={{ display:"flex", gap:14, alignItems:"flex-start" }}>
                <div style={{ flexShrink:0, width:20, height:20, borderRadius:"50%", background:`${D.saffron}20`, border:`1.5px solid ${D.saffron}`, display:"flex", alignItems:"center", justifyContent:"center", marginTop:2 }}>
                  <span style={{ color:D.saffron, fontSize:10, fontWeight:700 }}>✓</span>
                </div>
                <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:14, color:D.textMid, lineHeight:1.7, margin:0 }}>{f}</p>
              </div>
            ))}
          </div>
        </div>
        <div style={{
          background:D.banyan, borderRadius:4, padding:"52px 48px",
          position:"relative", overflow:"hidden",
        }}>
          <div style={{ position:"absolute", bottom:-40, right:-40, opacity:0.08 }}>
            <Lotus size={300} opacity={1}/>
          </div>
          <div style={{ position:"relative", zIndex:1 }}>
            <p style={{ fontFamily:"'Cormorant Garant',serif", fontSize:28, fontWeight:600, fontStyle:"italic", color:D.marigold, lineHeight:1.5, margin:"0 0 32px" }}>
              "The free Discovery Call took 20 minutes. I left knowing exactly
              what I needed to do next — for the first time in years."
            </p>
            <div style={{ fontFamily:"'DM Mono',monospace", fontSize:10, color:"rgba(232,201,122,0.5)", letterSpacing:3 }}>
              — FUTURE CLIENT TESTIMONIAL
            </div>
            <div style={{ marginTop:36, paddingTop:32, borderTop:"1px solid rgba(232,201,122,0.15)" }}>
              <a href="#book" style={{
                display:"inline-block",
                background:D.saffron, color:D.white,
                fontFamily:"'DM Sans',sans-serif", fontSize:14, fontWeight:600,
                padding:"14px 32px", borderRadius:4, textDecoration:"none",
              }}>Book Your Free Call Today</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [open, setOpen] = useState(null);
  return (
    <section id="faq" style={{ background:D.bgAlt, padding:"96px 24px" }}>
      <div style={{ maxWidth:760, margin:"0 auto" }}>
        <div style={{ textAlign:"center", marginBottom:64 }}>
          <div style={{ fontFamily:"'DM Mono',monospace", fontSize:11, color:D.saffron, letterSpacing:4, marginBottom:16 }}>FAQ</div>
          <h2 style={{ fontFamily:"'Cormorant Garant',serif", fontSize:"clamp(32px,4vw,52px)", fontWeight:700, color:D.forest, margin:0 }}>
            Questions worth asking
          </h2>
        </div>
        <div style={{ display:"flex", flexDirection:"column", gap:2 }}>
          {FAQS.map((faq, i) => (
            <div key={i} style={{
              background:D.white, borderRadius:4,
              border:`1px solid ${open===i?D.saffron:D.border}`,
              overflow:"hidden", transition:"border 0.2s",
            }}>
              <button onClick={()=>setOpen(open===i?null:i)} style={{
                width:"100%", background:"none", border:"none", cursor:"pointer",
                padding:"22px 28px", display:"flex", justifyContent:"space-between",
                alignItems:"center", gap:16, textAlign:"left",
              }}>
                <span style={{ fontFamily:"'Cormorant Garant',serif", fontSize:19, fontWeight:600, color:D.forest, lineHeight:1.3 }}>{faq.q}</span>
                <span style={{ color:D.saffron, fontSize:20, flexShrink:0, fontWeight:300, transform:open===i?"rotate(45deg)":"none", transition:"transform 0.2s" }}>+</span>
              </button>
              {open===i && (
                <div style={{ padding:"0 28px 22px" }}>
                  <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:14, color:D.textMid, lineHeight:1.8, margin:0 }}>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BookCTA() {
  return (
    <section style={{ background:D.banyan, padding:"96px 24px", position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", left:"50%", top:"50%", transform:"translate(-50%,-50%)", opacity:0.05, pointerEvents:"none" }}>
        <Lotus size={700} opacity={1}/>
      </div>
      <div style={{ maxWidth:700, margin:"0 auto", textAlign:"center", position:"relative", zIndex:1 }}>
        <div style={{ fontFamily:"'DM Mono',monospace", fontSize:11, color:"rgba(232,201,122,0.5)", letterSpacing:4, marginBottom:20 }}>
          YOUR NEXT STEP
        </div>
        <h2 style={{ fontFamily:"'Cormorant Garant',serif", fontSize:"clamp(36px,5vw,64px)", fontWeight:700, fontStyle:"italic", color:D.marigold, lineHeight:1.1, margin:"0 0 24px" }}>
          Start with a conversation.
        </h2>
        <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:16, color:"rgba(232,201,122,0.65)", lineHeight:1.7, margin:"0 0 44px" }}>
          Twenty minutes. No homework, no forms, no commitment.
          Just an honest conversation about where you are and where you want to be.
        </p>
        <a href="https://calendly.com/nutribalancewellness" target="_blank" rel="noreferrer"
          style={{
            display:"inline-block",
            background:D.saffron, color:D.white,
            fontFamily:"'DM Sans',sans-serif", fontSize:16, fontWeight:600,
            padding:"18px 44px", borderRadius:4, textDecoration:"none",
            letterSpacing:0.5,
          }}>
          Book Your Free Discovery Call
        </a>
        <div style={{ marginTop:28, fontFamily:"'DM Mono',monospace", fontSize:10, color:"rgba(232,201,122,0.35)", letterSpacing:2 }}>
          AVAILABLE MON – FRI · KITCHENER, ON · VIRTUAL WORLDWIDE
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background:"#080f09", borderTop:"1px solid rgba(232,201,122,0.1)", padding:"48px 24px 32px" }}>
      <div style={{ maxWidth:1100, margin:"0 auto" }}>
        <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr", gap:48, marginBottom:48 }}>
          <div>
            <div style={{ fontFamily:"'Cormorant Garant',serif", fontSize:22, fontWeight:700, color:D.marigold, marginBottom:6 }}>NutriBalance Wellness</div>
            <div style={{ fontFamily:"'DM Mono',monospace", fontSize:9, color:"rgba(232,201,122,0.4)", letterSpacing:3, marginBottom:16 }}>HERITAGE NUTRITION</div>
            <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:13, color:"rgba(232,201,122,0.45)", lineHeight:1.8, margin:"0 0 20px", maxWidth:320 }}>
              PN1 Certified Nutrition Coaching for South Asian women in Canada. Traditional foods. Modern science. Real life.
            </p>
            <div style={{ display:"flex", gap:14 }}>
              {["Instagram","Google"].map(s=>(
                <a key={s} href="#" style={{
                  fontFamily:"'DM Mono',monospace", fontSize:10, letterSpacing:2,
                  color:"rgba(232,201,122,0.4)", textDecoration:"none",
                  border:"1px solid rgba(232,201,122,0.2)", padding:"6px 12px", borderRadius:3,
                }}>{s.toUpperCase()}</a>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontFamily:"'DM Mono',monospace", fontSize:10, color:D.saffron, letterSpacing:3, marginBottom:20 }}>QUICK LINKS</div>
            {["About","Services","How It Works","FAQ","Book Free Call"].map(l=>(
              <a key={l} href={`#${l.toLowerCase().replace(/ /g,"-")}`}
                style={{ display:"block", fontFamily:"'DM Sans',sans-serif", fontSize:13, color:"rgba(232,201,122,0.5)", textDecoration:"none", marginBottom:10 }}>{l}</a>
            ))}
          </div>
          <div>
            <div style={{ fontFamily:"'DM Mono',monospace", fontSize:10, color:D.saffron, letterSpacing:3, marginBottom:20 }}>CONTACT</div>
            <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:13, color:"rgba(232,201,122,0.5)", lineHeight:1.8, margin:0 }}>
              hello@nutribalancewellness.ca<br/>
              Kitchener, Ontario, Canada<br/>
              Virtual appointments worldwide
            </p>
          </div>
        </div>
        <div style={{ borderTop:"1px solid rgba(232,201,122,0.08)", paddingTop:24, display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:12 }}>
          <div style={{ fontFamily:"'DM Mono',monospace", fontSize:10, color:"rgba(232,201,122,0.25)", letterSpacing:1 }}>
            © 2025 NutriBalance Wellness · Suchandra Das Ghosh · PN1 Certified Nutrition Coach
          </div>
          <div style={{ fontFamily:"'DM Mono',monospace", fontSize:10, color:"rgba(232,201,122,0.25)", letterSpacing:1 }}>
            Kitchener, Ontario · Not a Registered Dietitian
          </div>
        </div>
      </div>
    </footer>
  );
}

// ── MAIN ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div style={{ fontFamily:"'DM Sans',sans-serif", background:D.cream }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garant:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        html{scroll-behavior:smooth;}
        ::-webkit-scrollbar{width:6px;background:#0f1f12;}
        ::-webkit-scrollbar-thumb{background:#b5720a44;border-radius:3px;}
        a:focus-visible{outline:2px solid #b5720a;outline-offset:3px;}
        @media(max-width:768px){
          section > div[style*="grid-template-columns"]{grid-template-columns:1fr!important;}
          section > div > div[style*="grid-template-columns"]{grid-template-columns:1fr!important;}
        }
      `}</style>
      <Nav menuOpen={false} setMenuOpen={()=>{}} />
      <Hero />
      <ProblemBand />
      <About />
      <Pillars />
      <Services />
      <HowItWorks />
      <WhoItsFor />
      <FAQSection />
      <BookCTA />
      <Footer />
    </div>
  );
}
