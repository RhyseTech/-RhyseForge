---
name: frontend-design
description: Create distinctive, production-grade frontend interfaces with high design quality. Use this skill when the user asks to build web components, pages, artifacts, posters, or applications (examples include websites, landing pages, dashboards, React components, HTML/CSS layouts, or when styling/beautifying any web UI). Generates creative, polished code and UI design that avoids generic AI aesthetics.
license: Complete terms in LICENSE.txt
---

This skill guides creation of distinctive, production-grade frontend interfaces that avoid generic "AI slop" aesthetics. Implement real working code with exceptional attention to aesthetic details and creative choices.

The user provides frontend requirements: a component, page, application, or interface to build. They may include context about the purpose, audience, or technical constraints.

## Design Thinking

Before coding, understand the context and commit to a BOLD aesthetic direction:
- **Purpose**: What problem does this interface solve? Who uses it?
- **Tone**: Pick an extreme: brutally minimal, maximalist chaos, retro-futuristic, organic/natural, luxury/refined, playful/toy-like, editorial/magazine, brutalist/raw, art deco/geometric, soft/pastel, industrial/utilitarian, etc. There are so many flavors to choose from. Use these for inspiration but design one that is true to the aesthetic direction.
- **Constraints**: Technical requirements (framework, performance, accessibility).
- **Differentiation**: What makes this UNFORGETTABLE? What's the one thing someone will remember?

**CRITICAL**: Choose a clear conceptual direction and execute it with precision. Bold maximalism and refined minimalism both work - the key is intentionality, not intensity.

Then implement working code (HTML/CSS/JS, React, Vue, etc.) that is:
- Production-grade and functional
- Visually striking and memorable
- Cohesive with a clear aesthetic point-of-view
- Meticulously refined in every detail

## Frontend Aesthetics Guidelines

Focus on:
- **Typography**: Choose fonts that are beautiful, unique, and interesting. Avoid generic fonts like Arial and Inter; opt instead for distinctive choices that elevate the frontend's aesthetics; unexpected, characterful font choices. Pair a distinctive display font with a refined body font.
- **Color & Theme**: Commit to a cohesive aesthetic. Use CSS variables for consistency. Dominant colors with sharp accents outperform timid, evenly-distributed palettes.
- **Motion**: Use animations for effects and micro-interactions. Prioritize CSS-only solutions for HTML. Use Motion library for React when available. Focus on high-impact moments: one well-orchestrated page load with staggered reveals (animation-delay) creates more delight than scattered micro-interactions. Use scroll-triggering and hover states that surprise.
- **Spatial Composition**: Unexpected layouts. Asymmetry. Overlap. Diagonal flow. Grid-breaking elements. Generous negative space OR controlled density.
- **Backgrounds & Visual Details**: Create atmosphere and depth rather than defaulting to solid colors. Add contextual effects and textures that match the overall aesthetic. Apply creative forms like gradient meshes, noise textures, geometric patterns, layered transparencies, dramatic shadows, decorative borders, custom cursors, and grain overlays.

NEVER use generic AI-generated aesthetics like overused font families (Inter, Roboto, Arial, system fonts), cliched color schemes (particularly purple gradients on white backgrounds), predictable layouts and component patterns, and cookie-cutter design that lacks context-specific character.

Interpret creatively and make unexpected choices that feel genuinely designed for the context. No design should be the same. Vary between light and dark themes, different fonts, different aesthetics. NEVER converge on common choices (Space Grotesk, for example) across generations.

**IMPORTANT**: Match implementation complexity to the aesthetic vision. Maximalist designs need elaborate code with extensive animations and effects. Minimalist or refined designs need restraint, precision, and careful attention to spacing, typography, and subtle details. Elegance comes from executing the vision well.

Remember: Claude is capable of extraordinary creative work. Don't hold back, show what can truly be created when thinking outside the box and committing fully to a distinctive vision.

## Reference Visual Direction (Use When Requested)

If the user asks for a style similar to the provided pricing/portfolio references, use this exact direction:
- **Light mode**: airy frosted-glass aesthetic with layered cyan/blue/indigo gradient backgrounds, soft radial glows, bright translucent surfaces (`bg-white/50+`), subtle borders, and deep navy text for high readability.
- **Dark mode**: same composition translated to deep indigo/navy backgrounds with luminous cool highlights, translucent dark cards (`bg-slate-900/40+`), and light text contrast.
- **Cards**: rounded high-radius glass cards with backdrop blur, elevated shadows, and one prominent featured card using a richer saturated gradient.
- **Typography**: bold, clean, modern hierarchy (large hero headline, medium subheads, crisp body text) with clear contrast in both modes.
- **Color pattern**: prioritize cyan/azure/indigo/violet relationships; avoid muddy palettes and maintain consistent accent use across buttons, icons, and badges.
- **Implementation rule**: always deliver both `light` and `dark` states with deliberate palette tuning, not just an inverted color swap.

## Royal Premium Direction (Default When User Asks for Grand, Premium, Luxury, or "Royal")

When the user asks for a premium look, treat this as a **Royal Product Experience** request.
The UI should feel expensive, trustworthy, and future-ready, not merely decorative.

### Royal Art Direction
- **Mood**: grand, elegant, confident, ceremonial, high-value.
- **Visual hierarchy**: strong hero moments, clean breathing space, premium card depth, crisp typography rhythm.
- **Surface language**: layered translucency, polished highlights, subtle metallic accents, controlled glow.
- **Avoid**: noisy gradients, cheap neon overload, default dashboard look, plain flat cards.

### Royal Color Systems
- **Light mode palette**: porcelain/pearl backgrounds, champagne highlights, sapphire/indigo anchors, dark ink text.
- **Dark mode palette**: midnight navy/obsidian base, royal blue and soft gold accents, high-clarity ivory text.
- **Accent discipline**: pick 1 primary royal accent and 1 secondary support accent; keep consistent across CTA, icon emphasis, and badges.
- **Contrast rule**: premium look must still pass readability; never sacrifice legibility for glow.

### Royal Typography Pairing
- Use a refined display serif or high-character title face for hero headings and section titles.
- Use a clean, highly readable sans for body/UI text.
- Keep typographic contrast intentional: display for emotion, sans for clarity.
- Enforce polished micro-typography: tighter heading tracking, balanced line-height, deliberate scale jumps.

### Royal Motion Language
- **Page load choreography**: elegant staggered reveals for hero, navigation, and cards.
- **Hover behavior**: gentle lift, soft shadow bloom, border shimmer, and CTA emphasis.
- **Scroll moments**: selective parallax/glow transitions for premium depth.
- Motion should feel cinematic and controlled, not playful or bouncy.

### Royal Components (Feature Expansion Pack)
When building pages, include or propose premium components that increase perceived value:
- **Signature Hero**: statement headline, premium subcopy, trust badges, elite CTA grouping.
- **Feature Gallery Cards**: layered cards with icon crest, value headline, and short outcome text.
- **Pricing Prestige Block**: one clearly featured flagship plan with elevated visual treatment.
- **Proof of Excellence**: client logos, outcomes, testimonials, or key metrics with premium styling.
- **Roadmap/Innovation Timeline**: show future product strength with elegant timeline visuals.
- **Command Center Preview**: dashboard mock panel that signals advanced capability.
- **Security & Trust Banner**: polished trust strip for compliance, device protection, and privacy cues.
- **Royal Footer**: high-end, structured footer with strong brand close.

### Advanced Royal Features (Add When Relevant)
- **Premium Onboarding Flow**: multi-step welcome with progress halo, persona selection, and goal-based setup.
- **Executive KPI Ribbon**: compact top strip with live stats, trend arrows, and confidence indicators.
- **Spotlight Panel**: rotating highlight for newest release, certification update, or flagship feature.
- **AI Concierge Block**: elegant assistant panel for recommendations, shortcuts, and smart actions.
- **Achievement Layer**: prestige badges, rank medals, streak visuals, and mastery milestones.
- **Elite Notification Center**: priority cards for urgent updates, approvals, and reminders.
- **Interactive Comparison Matrix**: premium plan/feature comparison with sticky headers and emphasis states.
- **Immersive Empty States**: beautifully illustrated or gradient-driven empty states with strong CTA guidance.
- **Command Palette UX**: keyboard-driven quick actions styled to match the royal theme.
- **Floating Action Dock**: high-value actions grouped in a polished sticky control cluster.

### Premium Data Visualization Rules
- Prefer elegant charts with restrained gradients and high-contrast labels.
- Use soft depth, thin grid lines, and intentional highlight colors for key metrics.
- Include annotation callouts on meaningful peaks/drops, not everywhere.
- Maintain strong readability in both light and dark themes.

### Micro-Interaction Patterns
- Add subtle magnetic hover for primary CTAs.
- Use shimmer pass only on hero CTA, featured card, or key stat tiles.
- Add smooth state transitions for loading/success/error with premium motion timing.
- Use tactile press states for buttons and segmented controls.

### Content Framing for Premium Perception
- Headlines should communicate transformation and authority, not just features.
- Body copy should be concise, confident, and benefit-led.
- Add selective “trust language” blocks (security, uptime, support SLAs, compliance).
- Use section intros to guide the story: value -> proof -> action.

### Accessibility + Performance Constraints (Royal Quality Bar)
- Respect `prefers-reduced-motion`; disable non-essential motion when requested.
- Keep effects GPU-friendly; avoid heavy blur stacks that reduce performance.
- Ensure keyboard navigation and visible focus rings remain premium and clear.
- Premium visuals must degrade gracefully on lower-end devices.

### Royal UI Details
- Use purposeful iconography with consistent weight and visual tone.
- Add subtle edge highlights, depth shadows, and gradient borders for premium tactility.
- Prefer large-radius sections/cards for modern elegance.
- Use decorative separators, section markers, and elevated labels to reinforce structure.

### Royal Execution Checklist (Do Not Skip)
- Deliver both light and dark mode with separate palette tuning.
- Ensure responsive quality on desktop, tablet, and mobile.
- Include at least one signature visual moment users will remember.
- Keep accessibility strong (contrast, focus states, reduced-motion fallback where needed).
- Ensure implementation is production-ready, not just a static mock.

### Prompt Interpretation Rule
If user says "make it cool", "modern", "grand", "premium", "luxury", or "royal":
- default to this Royal Premium Direction unless they request another style explicitly.
