/**
 * Content banks for the Peermeld blog generator — categories 1–5.
 * Every category provides: intros, 7 body sections, 6 FAQs, outros, related docs.
 * Sections are written so any 4 (in any order) read as a coherent article.
 */
export const banksA = {
  /* ------------------------------------------------------------------ */
  'getting-started': {
    relatedDocs: [
      ['Getting Started guide', '/docs/getting-started'],
      ['Quickstart', '/docs/quickstart'],
      ['Claim your subdomain', '/docs/getting-started/claim-subdomain'],
      ['Set up your profile', '/docs/getting-started/setup-profile'],
    ],
    intros: [
      (p) => `Peermeld is growing fast — and like every young network, the members who set up properly in week one end up owning the best real estate: the clean subdomains, the memorable handles, the profiles that rank. This guide walks you through ${p.focus} the right way, the first time.`,
      (p) => `If you just joined Peermeld (or you are still hovering over the sign-up button), this article is your shortcut past the confusion. We will cover ${p.focus} step by step, with the small details that most new members only learn the hard way.`,
      (p) => `Every day, new developers, designers and founders land on peermeld.com and ask the same question: where do I start? The honest answer is ${p.focus} — and the good news is that it takes minutes, not days, when you follow the right order.`,
    ],
    sections: [
      {
        h: 'Why the first hour on Peermeld matters more than the first month',
        body: [
          'Young networks behave like young cities: the earliest residents get the best lots. On Peermeld, your first hour decides three things you cannot easily redo later — your subdomain, your username, and the first impression stamped on your directory card with its NEW badge.',
          'None of this requires talent or luck. It requires doing the boring setup steps completely, in the right order, before you get distracted by the feed. Members who complete their profile before their first post grow noticeably faster in their first month, because every post they publish lands on a profile worth following.',
        ],
      },
      {
        h: 'The setup order that professionals use',
        body: [
          'Do it in this order: sign in with Google, claim your subdomain, complete your profile, then touch the feed. The reason is compounding: your subdomain is what your posts will link back to, and your profile is what converts the visitors your posts earn.',
          'Skipping ahead feels productive — an intro post with no photo and no claimed subdomain still gets a few kind upvotes — but you are spending attention you have not built the bucket to catch. Ten minutes of setup first means every early impression sticks.',
          'If you already joined without doing this, do not panic. Fix the foundation now, then treat your next post as your real arrival. The community reads profiles far more than it remembers timelines.',
        ],
      },
      {
        h: 'Claiming your corner of peermeld.com',
        body: [
          'The subdomain checker on the Peermeld homepage is the single most valuable box on the platform. Type a name of at least four characters — it cannot be only numbers — and you will know instantly whether yourname.peermeld.com is yours to take.',
          'Pick the name people will actually search for. If your handle elsewhere is taken on Peermeld, use a clean variant: yourname-dev, yournamedesign, or a middle initial. Avoid clever spellings you will forever be dictating letter by letter on calls.',
          'The claim flow shows an SEO preview of your future Google snippet. Read it like a stranger would: is the title clear, does the description make you want to click? That preview is your first meta description — treat it with the respect your personal brand deserves.',
        ],
      },
      {
        h: 'A profile that works while you sleep',
        body: [
          'Your Peermeld profile is not a form to fill; it is a funnel. The banner (a GIF works beautifully) shows what you do. The headline says who you help and how. The bio carries your stack and your current project. The link points at your one canonical home. Every element either adds trust or leaks it.',
          'Pay special attention to the headline, because it follows you everywhere: the /grow directory cards, search results, hover previews. "Full-stack developer building SaaS for educators" survives every one of those contexts. "Code ninja" survives none of them.',
          'Finally, open your profile on your phone. That is how collaborators, recruiters and future co-founders will first meet you — usually from a feed post they tapped during a commute.',
        ],
      },
      {
        h: 'Your first week, hour by hour',
        body: [
          'Day one is setup. Day two is your intro post: who you are, what you are building, what feedback you want — with a screenshot, because visuals dominate the Trending tab. Day three, add your first project with honest tech stack tags.',
          'Days four and five belong to generosity: ten thoughtful comments on other people\'s posts will teach you the culture and earn your first followers faster than any self-promotion. Day six, outline a launch if you have something to launch. Day seven, review your streak and plan the next week.',
          'This rhythm matters because Peermeld\'s reputation systems — streaks, Top Streaks This Week, rewards — all key on consistency. A calm first week done daily beats a heroic Sunday every time.',
        ],
      },
      {
        h: 'The mistakes that slow new members down',
        body: [
          'The classic error is posting before profiling: ten posts from an empty profile convert nobody. The second is syndicating LinkedIn content verbatim — the community rewards native, specific, builder-to-builder writing and quietly ignores recycled corporate tone.',
          'Third is lurking forever. Peermeld is small enough that early voices get heard; the founder answers comments personally. A question asked publicly today gets an answer today, and everyone who reads it later remembers you asked it first.',
          'Last: chasing every feature at once. You do not need a company page, a Meld Space strategy and a launch on day two. Master profile + feed first; the rest layers on naturally.',
        ],
      },
      {
        h: 'Where to go after the basics',
        body: [
          'Once account, subdomain and profile are solid, your growth moves to the feed. Learn the three tabs — Newest, Trending, Following — and practise the daily loop: one post, three upvotes, three comments, three follows.',
          'Then pick a proof-of-work surface that matches your craft: a project page with build logs if you code, portfolio blocks if you design, a company page if you are building a team. Each one multiplies what the feed earns you.',
          'And claim a small public promise — "shipping weekly build logs every Friday". Public commitments are the quiet engine behind every strong Peermeld profile you admire.',
        ],
      },
    ],
    faqs: [
      ['Is Peermeld really free to join?', 'Yes. Creating an account, posting on the feed, claiming a yourname.peermeld.com subdomain, building portfolios and projects, and launching products are all free. The platform monetises attention on builders, not access for them.'],
      ['How long does setup actually take?', 'Account creation is one Google sign-in click. Subdomain claiming is two minutes if your first choice is free. A solid profile takes ten focused minutes. Most members complete the whole foundation inside twenty minutes.'],
      ['What if my preferred subdomain is taken?', 'Subdomains are first-come first-served and not resold. Use a professional variant — a middle initial, your craft suffix like -dev, or a the- prefix — then keep it consistent everywhere else you publish.'],
      ['Do I need to be a developer to join?', 'No. The community skews developer-heavy, but Peermeld explicitly welcomes every profession that helps great work happen — designers, founders, writers, students and more.'],
      ['What should my first post say?', 'Who you are, what you are building right now, and one question you want the community\'s help with. Add a screenshot or image if you can. That formula has launched hundreds of Peermeld careers.'],
      ['Can I change my display name later?', 'Yes — display name, headline, bio, banner and avatar are all editable. Your username and subdomain are the semi-permanent parts, so choose those most carefully.'],
    ],
    outros: [
      (p) => `Setup is the only part of Peermeld there are no shortcuts around — which is exactly why it is a moat. Do ${p.focus} properly once, and every post, project and launch you ever publish will land on a foundation that converts.`,
      (p) => `You now know more about ${p.focus} than most members learn in their first month. Close this tab, open peermeld.com, and finish the setup while it is fresh — your future followers are already scrolling.`,
    ],
  },

  /* ------------------------------------------------------------------ */
  'feed-mastery': {
    relatedDocs: [
      ['The Feed — complete guide', '/docs/feed'],
      ['Creating posts', '/docs/feed/create-post'],
      ['Tabs & filters', '/docs/feed/tabs-and-filters'],
      ['Feed strategy', '/docs/feed/feed-strategy'],
    ],
    intros: [
      (p) => `The Peermeld Feed at peermeld.com/feed looks simple: a composer, three tabs, a stream. Underneath that simplicity is the most efficient career-distribution engine a builder can use this year — if you understand how it actually works. Today we are pulling that apart for ${p.focus}.`,
      (p) => `Most members treat the feed like a slot machine: post, scroll, hope. The members growing fastest treat it like a system — with inputs they control and outputs they can predict. This article is about ${p.focus}, and it will change how you open peermeld.com/feed tomorrow morning.`,
      (p) => `Watch the Trending tab for a week and patterns emerge: changelog posts soaring, thoughtful questions outranking hot takes, screenshots beating essays. None of it is random. Here is the practical guide to ${p.focus}.`,
    ],
    sections: [
      {
        h: 'How the three tabs actually distribute your post',
        body: [
          'Every post starts life in NEWEST, the chronological river where early birds hunt for fresh launches and new members. If it earns engagement fast — upvotes, and especially comment threads — it graduates to TRENDING, where the whole community browses. Meanwhile it always appears in the FOLLOWING tab of everyone who follows you.',
          'This means each post has three distinct audiences: discovery surfers, the trend-watching crowd, and your own circle. Posts that work speak to all three at once: specific enough for your followers, interesting enough for trend-watchers, clear enough for a stranger who has never seen your name.',
        ],
      },
      {
        h: 'The velocity principle behind Trending',
        body: [
          'Peermeld does not publish its ranking formula, but the observable pattern is unmistakable: Trending rewards engagement velocity, not raw totals. A post with five upvotes and a real conversation in its first hour outranks one that slowly accumulates twenty upvotes over three days.',
          'The practical consequence is the 60-minute rule: for the first hour after posting, stay present. Reply to every comment, upvote commenters, and add any missing context as a reply. You are not gaming the algorithm — you are hosting the conversation the algorithm is looking for.',
          'Timing helps too. Post when your peers are online, not into a dead hour. Watch when your own audience engages and shift your schedule to meet them.',
        ],
      },
      {
        h: 'Formats the community provably rewards',
        body: [
          'Study the live Trending tab and four formats dominate. First, the numbered changelog — Peermeld\'s own weekly changelog hit the top with 131 upvotes because every line is concrete. Second, the honest first-person take: "Brave was getting slow, so I switched to Helium full-time" travels because it is a real experience, not a headline.',
          'Third, the specific question: "suggest me an open source coding agent IDE where I can run multiple agents" invites answers, and answers are engagement fuel. Fourth, the progress share with an attachment — "Building AtroUI, a non-typical React component library" pairs an intro with a link preview and an invitation to contribute.',
          'Notice what is missing: inspirational platitudes, engagement bait, and link-dumps without commentary. The builder audience filters those instantly.',
        ],
      },
      {
        h: 'Attachments are not decoration',
        body: [
          'Scroll the feed and count: nearly every high-performing post carries a visual — a screenshot, a diagram, or a YouTube embed that Peermeld renders with a playable thumbnail automatically when you paste the link.',
          'This is not vanity. Attachments stop the scroll in NEWEST, give upvoters confidence that there is substance behind the words, and fill your profile\'s Media tab — which is often the second place a curious visitor clicks after your headline.',
          'The habit to build: never publish a meaningful post without at least one piece of visual evidence. Screenshot the result, not the intention.',
        ],
      },
      {
        h: 'Upvotes, avatars and the new social physics',
        body: [
          'A platform update added avatars of users who upvoted to every post. That small change rewired the social physics of the feed: upvoting is no longer anonymous applause, it is visible association. Your avatar sitting on someone\'s launch post is a tiny, permanent act of networking.',
          'Use this both ways. Upvote generously and early — being one of the first three avatars on a future trending post puts your face in front of its entire eventual audience. And on your own posts, study who upvoted: those avatars are your warmest future collaborators, and a follow-back plus a comment on their latest post is the natural next step.',
        ],
      },
      {
        h: 'The daily loop that compounds',
        body: [
          'Fifteen minutes a day is enough if the loop is right. Start in FOLLOWING and engage with your circle first — relationships before reach. Then NEWEST, where early attention on others\' posts gets remembered. Finally TRENDING, to learn what worked and join the biggest live conversations.',
          'In parallel, run the 3-3-3 habit: upvote three posts you genuinely rate, write three substantive comments, follow three people whose work you want more of. Add your one daily post and you have exercised every growth muscle the platform has.',
          'The loop also feeds your streak, which feeds Top Streaks This Week, which feeds profile visits, which feed follows. It is a flywheel disguised as a routine.',
        ],
      },
      {
        h: 'Reading the feed like an analyst',
        body: [
          'Until dashboards arrive, instrument yourself. After each post, note three numbers after 24 hours: upvotes, comments, and new followers gained that day. After a month, rank your posts by those numbers and look for the pattern — topic, format, time of day, attachment or not.',
          'Also watch your comment-to-upvote ratio. Comments signal discussion-worthiness; a post many people upvote but nobody discusses is content that pleases but does not spread. Chasing the ratio upward is chasing real community relevance.',
          'Finally, keep a swipe file. Screenshot the trending posts you admire weekly. When you reverse-engineer twenty of them, your own writing changes without any course or coach.',
        ],
      },
    ],
    faqs: [
      ['How often should I post on the Peermeld Feed?', 'One meaningful post per day is the sweet spot — it powers your streak and keeps your profile tabs fresh without training followers to scroll past you. Three great posts a week beat ten filler ones.'],
      ['What makes a Peermeld post trend?', 'Fast early engagement: upvotes plus genuine comment threads in the first hour. Attach a visual, lead with a hook, and stay to host the discussion after you publish.'],
      ['Are links bad for reach?', 'No — Peermeld unfurls links into rich preview cards and embeds YouTube thumbnails. What fails is a bare link with no take. Add two sentences of your own analysis and the link becomes an asset.'],
      ['What is the best time to post?', 'There is no universal answer — watch when your own followers engage and shift toward that window. Consistency at a decent hour beats random posting at a perfect one.'],
      ['Can I edit or delete a post?', 'Treat every post as permanent and public. Draft in a note if unsure, read twice, then publish. Your Posts, Replies and Media tabs are your public record — curate accordingly.'],
      ['How do Source accounts affect my reach?', 'Followed Sources like freeCodeCamp and Fireship compete politely in the same timelines. They do not suppress you — engaging on their big-audience posts is actually a discovery surface for you.'],
    ],
    outros: [
      (p) => `The feed rewards members who treat it as a craft. Apply this guide to ${p.focus} for two weeks — one loop, once a day — and your analytics-by-observation will show you the curve bending.`,
      (p) => `You now have the full mental model behind ${p.focus}. The only ingredient left is reps. Your next post is the first rep — publish it today.`,
    ],
  },

  /* ------------------------------------------------------------------ */
  'personal-branding': {
    relatedDocs: [
      ['Profile SEO', '/docs/profile/profile-seo'],
      ['Set up your profile', '/docs/getting-started/setup-profile'],
      ['Your profile reference', '/docs/profile'],
      ['Claim your subdomain', '/docs/getting-started/claim-subdomain'],
    ],
    intros: [
      (p) => `On Peermeld, your profile is not a résumé — it is a search-lighthouse. Every post, project and streak points back to it, and thanks to your free yourname.peermeld.com subdomain, so can Google. This guide covers ${p.focus} with the specifics most branding advice skips.`,
      (p) => `Personal branding advice is usually vague: "be authentic", "add value". Here is the concrete version, built for how Peermeld actually works — the fields, the tabs, the SEO preview — applied to ${p.focus}.`,
      (p) => `Two members post equally good content. One gains followers weekly; the other stays flat. The difference is almost never content quality — it is what happens when a reader clicks their name. Today, ${p.focus}.`,
    ],
    sections: [
      {
        h: 'Your subdomain is the brand\'s front door',
        body: [
          'Owning yourname.peermeld.com means your identity has one canonical, keyword-rich address. Your name is in the domain itself — the strongest possible relevance signal for searches of your name — and every backlink you ever earn consolidates onto that single URL.',
          'The claim rules are simple (at least four characters, not only numbers) but the thinking should not be rushed. Match your GitHub and X handles if possible. A consistent handle across platforms lets search engines and humans alike cluster your identities into one discoverable whole.',
          'The built-in SEO preview shows your exact Google snippet. Treat it like a landing-page headline: would a stranger click it? If not, edit your headline and bio until the answer is yes.',
        ],
      },
      {
        h: 'Headlines that survive every context',
        body: [
          'Your headline appears in the /grow directory, in search snippets, beside your comments, and in hover states. It must work in twelve words or fewer, with no surrounding context. The formula that never fails: role + specialty + who or what it is for.',
          '"Frontend engineer building design systems for fintech" survives every placement. "Passionate about technology" survives none. If you are multi-disciplinary, pick the combination you most want to be hired or followed for — the headline is a positioning choice, not a biography.',
          'Revisit the headline quarterly. Your positioning should drift as your work drifts; a stale headline is the most common brand leak on otherwise strong profiles.',
        ],
      },
      {
        h: 'The tabs are your proof-of-work triptych',
        body: [
          'Every Peermeld profile splits public reputation into Posts, Replies and Media. Visitors unconsciously grade all three. Posts show what you think; Replies show how you treat people; Media shows that you actually ship things you can screenshot.',
          'Most branding advice ignores Replies, which is a mistake — a Replies tab full of generous, expert answers is the strongest silent hiring signal on the platform. Recruiters read them. Founders read them. So write public replies you would be proud to have quoted in an interview.',
          'Media requires habit, not talent: attach a screenshot to substantial posts and the tab fills itself with a gallery of shipped work.',
        ],
      },
      {
        h: 'SEO moves beyond the basics',
        body: [
          'Once the subdomain and headline are set, ranking improves through freshness and references. Freshness is your feed activity — consistent posting makes crawlers revisit, and every post adds indexable text under your identity. This is where your streak quietly doubles as an SEO strategy.',
          'References are backlinks: link your subdomain from your GitHub profile, your other socials, your email signature, and any guest posts you write. Each link is a vote Google counts, cast by you, costing nothing.',
          'And write your bio for entity clarity: name, role, stack, location, current project. AI answer engines assemble answers from exactly these structured facts — clear pages get cited, muddled ones get ignored.',
        ],
      },
      {
        h: 'Visual identity: avatar, banner, theme',
        body: [
          'Humans remember images faster than names. Your avatar appears beside every post and comment — small, circular, frequent. Use the same one everywhere on the internet and you become recognisable in a scroll across platforms.',
          'The banner is your billboard: Peermeld supports animated GIF banners, and the best members use them to show their product in motion rather than abstract art. Combined with a matching portfolio theme, your page starts to feel like a designed brand instead of a filled form.',
          'Consistency beats artistry here. Two clean, matching visuals used for a year build more recognition than a redesign every month.',
        ],
      },
      {
        h: 'Reputation signals you cannot buy',
        body: [
          'Peermeld bakes trust signals into every profile: the Joined date, visible streaks, the award badge on notable profiles, your company badge. None can be purchased; all can be earned earlier than you expect by simply showing up daily.',
          'The Joined date deserves special mention — tenure is trust that only accumulates with time. Every day you delay joining is a day of credibility you cannot recover. The corollary is pleasant: whatever your join date says today, it only gets stronger.',
          'Stack these signals deliberately: an old-enough join date, a live streak, a company badge and one trending post together tell a stranger everything they need to hit Follow.',
        ],
      },
      {
        h: 'A brand system, not a brand day',
        body: [
          'The members with magnetic brands run systems, not sprints. Weekly: one anchor post about their core topic. Daily: the engagement loop. Monthly: the 15-minute profile audit — search your own name, read your snippet, refresh anything stale, fix dead links.',
          'Their secret is that the system is small enough to survive bad weeks. A brand built on daily heroic effort collapses at the first busy sprint; one built on a 15-minute loop compounds through years.',
          'Write your loop down, put it next to your keyboard, and let consistency do what charisma cannot.',
        ],
      },
    ],
    faqs: [
      ['How do I rank my Peermeld profile on Google?', 'Claim your exact-name subdomain, front-load your name and role in your headline, keep your bio keyword-true, post consistently, and link the subdomain from every other profile you own. Freshness plus backlinks wins.'],
      ['What should my Peermeld headline say?', 'Role + specialty + audience in twelve words or fewer: "Full-stack developer building POS tools for restaurants". Specificity converts; vague passion does not.'],
      ['Does my avatar matter for followers?', 'Enormously. It is the most-repeated piece of your visual identity — every post, comment, directory card and upvoter-avatar row. Use one clear image, on Peermeld and everywhere else.'],
      ['Should my banner be a GIF?', 'If it shows your work in motion, yes — Peermeld supports animated banners and they are memorable. If it is decoration only, a clean static image beats a distracting loop.'],
      ['How often should I update my profile?', 'Light-touch monthly: headline still true? Link alive? Banner current? Plus a deeper refresh whenever your role, stack or focus project changes.'],
      ['Can AI search engines find my Peermeld profile?', 'Yes — public, structured pages with clear names, roles and bios are exactly what ChatGPT, Perplexity and similar engines cite. Clarity and consistency are the whole game.'],
    ],
    outros: [
      (p) => `A personal brand on Peermeld is just proof of work, presented clearly, found easily. ${p.focus} done well is not self-promotion — it is making your real work legible to the people already looking for it.`,
      (p) => `That is the complete playbook for ${p.focus}. Implement it this week, then get back to building things worth branding.`,
    ],
  },

  /* ------------------------------------------------------------------ */
  'portfolio-projects': {
    relatedDocs: [
      ['Project showcases', '/docs/projects'],
      ['Build logs', '/docs/projects/build-logs'],
      ['Portfolio blocks & themes', '/docs/profile/portfolio'],
      ['Your profile', '/docs/profile'],
    ],
    intros: [
      (p) => `Certificates list what you studied; portfolios prove what you shipped. Peermeld gives you both sides of proof — structured project pages and visual portfolio blocks — wired into the same profile your feed activity promotes. This article is your field guide to ${p.focus}.`,
      (p) => `Ask any hiring manager what makes a portfolio memorable and you will hear the same answer: evidence of real decisions on real work. Peermeld was essentially designed around that answer. Here is how to use it for ${p.focus}.`,
      (p) => `The difference between a portfolio that gets replies and one that gets archived is rarely the quality of the work — it is the quality of the presentation. Let us fix yours, starting with ${p.focus}.`,
    ],
    sections: [
      {
        h: 'Projects, portfolios, launches: pick the right surface',
        body: [
          'Peermeld gives every piece of work three possible homes, and choosing correctly doubles their effect. The project page is the deep, permanent record: logo, tagline, stack tags, screenshots, live link, status, build logs. The portfolio block is the curated gallery piece for employers. The Launch entry is the moment of maximum attention.',
          'Same work, three jobs: the project page says "here is everything", the portfolio says "here is the best, presented", the launch says "here is now". New members often use only one surface; professionals route the same work through all three.',
        ],
      },
      {
        h: 'Writing project cards that get clicked',
        body: [
          'A project card has seconds to communicate value. Name it like a product, not a repo: "Frostline Analytics" beats "weather-app-final-v2". Write the tagline as what it does for whom — "Realtime weather telemetry service" — not the technology, because the next field covers technology.',
          'Then let stack tags do their quiet work. Tags like React, Node and PostgreSQL are not decoration; they are how Global Search and talent filters assemble shortlists. Three to six honest tags place your work in front of exactly the people filtering for those tools.',
          'Status honesty is a feature, not a confession: an In Progress project with recent build logs signals momentum, which is more attractive than a dusty Live badge from years ago.',
        ],
      },
      {
        h: 'Build logs: your reputation, serialised',
        body: [
          'The markdown build-log editor with instant preview is one of Peermeld\'s most underrated surfaces. A log written weekly — context, changes, decisions, next — becomes a serialised record of how you think, which is precisely what collaborators and hiring teams cannot see in a CV.',
          'The craft is in specificity. "Improved performance" is fog; "cut search latency under 100ms by moving to Postgres full-text search" is a fact another engineer can respect. Write the decisions and trade-offs — that is the senior-engineer signal juniors skip.',
          'Number your logs (#1, #2, #3). The sequence itself tells a growth story, and it makes binge-reading your project effortless for the visitor who matters.',
        ],
      },
      {
        h: 'Portfolio blocks that tell stories',
        body: [
          'A portfolio block is not a screenshot dump; it is a miniature case study. Structure each as problem, your specific contribution, and outcome. "E-commerce checkout redesign — lifted conversion 18%" is a story with a number. "Client project 2025" is a shrug.',
          'Order matters brutally: put your three strongest blocks first, because most visitors decide within that first screen whether to keep reading. Retire weaker work ruthlessly — a tight portfolio of six excellent blocks beats a museum of twenty average ones.',
          'Mix media: a diagram, a UI screenshot, a short paragraph. Varied blocks hold attention longer and photograph better when visitors screenshot them into internal hiring threads.',
        ],
      },
      {
        h: 'Themes and the portfolio view',
        body: [
          'Your portfolio view — reachable from the portfolio link on your profile and your subdomain — renders your blocks as a clean standalone site. The first official theme landed in a recent changelog with more than ten more planned, and early adoption of a new theme is free differentiation while it is still rare.',
          'Match theme to craft: minimal and typographic for writers and engineers, bold and spacious for designers and visual artists. Then verify it on mobile, where most evaluation actually happens.',
          'Share the portfolio view URL anywhere a traditional portfolio link would go: applications, freelance profiles, your link-in-bio, your email signature. It stays current as you add blocks — no redesign weekends ever again.',
        ],
      },
      {
        h: 'Connecting projects to the feed and search',
        body: [
          'Isolated project pages gather dust; wired ones compound. Every meaningful project milestone deserves a feed post with a screenshot — the post drives visits, the visits convert to follows, the follows see your next milestone. One project should generate a dozen feed moments across its life.',
          'The SEO path matters too: your project\'s text — name, tagline, tags, build logs — lives on your crawlable profile, quietly indexing for tool-and-problem queries. "Postgres full-text search case study" is the kind of long-tail search that ends with someone reading your build log and offering you work.',
          'Close the loop by updating the project page when posts perform well — a trending post about a feature is evidence that feature deserves a portfolio block.',
        ],
      },
      {
        h: 'Maintenance: the unglamorous multiplier',
        body: [
          'Portfolios decay: links rot, screenshots go stale, the "current" project changes jobs. Set a monthly fifteen-minute review — click every live link, re-read taglines, retire anything you would not show a dream client today.',
          'Add one block per shipped thing, forever. The habit is tiny; the cumulative effect is a portfolio that always looks like you are at your peak, because functionally, you are.',
          'And once a quarter, add a new kind of evidence: a metric, a testimonial, a before-and-after. Portfolios that evolve convert; portfolios that freeze fossilise.',
        ],
      },
    ],
    faqs: [
      ['What is the difference between a project and a portfolio block on Peermeld?', 'A project is the full structured page — logo, stack tags, links, build logs. A portfolio block is a curated showcase piece in your portfolio view. Best practice: the project holds the depth; the block distils the highlights.'],
      ['How many projects should I publish?', 'Three excellent ones beat ten abandoned ones. Publish what you can maintain links and logs for — each project is a living commitment, not a trophy case entry.'],
      ['Do tech stack tags really matter?', 'Yes — they are the primary mechanism by which Global Search and hiring filters surface your work. Tag honestly and specifically: the frameworks and tools you would want to be found for.'],
      ['How do I get the portfolio view link?', 'Your profile renders it at the portfolio view path (peermeld.com/yourname with the portfolio view, also served on your subdomain). Share that URL anywhere a portfolio link belongs.'],
      ['Should in-progress projects be public?', 'Absolutely. In Progress with active build logs is the strongest building-in-public signal there is — it shows trajectory, not just outcomes.'],
      ['How long should a build log be?', 'Four short sections — context, changes, decisions, next — is plenty. Two hundred focused words about a real decision outperform a thousand vague words about features.'],
    ],
    outros: [
      (p) => `Work you cannot show might as well not exist to the people who could hire, fund or join you. ${p.focus} is how your work becomes visible, credible and permanent — start with your strongest piece and publish it this week.`,
      (p) => `You have the whole system now for ${p.focus}. The rest is reps: ship, log, showcase, repeat. Your future portfolio is being written by what you build this month.`,
    ],
  },

  /* ------------------------------------------------------------------ */
  'launch-strategy': {
    relatedDocs: [
      ['Peermeld Launch', '/docs/launch'],
      ['The Launch playbook', '/docs/launch/launch-playbook'],
      ['Feed strategy', '/docs/feed/feed-strategy'],
      ['Project showcases', '/docs/projects'],
    ],
    intros: [
      (p) => `Every week, products ship into the void on launch platforms where a thousand entries fight for the same hour of attention. Peermeld Launch runs on a different physics: a weekly board, a builder-only electorate, and rankings small teams can actually win. This guide is about ${p.focus}.`,
      (p) => `Ranking on peermeld.com/launch is neither luck nor budget — it is a campaign, and campaigns have checklists. Here is everything we know about ${p.focus}, distilled from watching the board week after week.`,
      (p) => `The Peermeld Launch leaderboard resets every week, which makes it the fairest fight in product launching. Winners share a pattern: they treat launch week as the middle of a story, not the story. Today: ${p.focus}.`,
    ],
    sections: [
      {
        h: 'How the weekly board actually works',
        body: [
          'Launch is organised by week — Week 30, Week 31, and so on — and every Monday the race restarts. Products are submitted into the current week, the community upvotes, and ranks display as #1, TOP 2, TOP 3 and beyond, with each card showing the logo, tagline, maker and category tags.',
          'Look at a real leaderboard: Peermeld itself took TOP 1 with 11 upvotes; Bullshit Detector, an AI fact-checking agent, held TOP 2; Sluggit, a TypeScript slug library, took TOP 3 with two upvotes. Read those numbers again — this is a board where three genuine upvotes can put you on a podium. That is the weekly reset\'s gift to small makers.',
        ],
      },
      {
        h: 'The two-week warm-up that decides everything',
        body: [
          'Launches are won before submission day. Two weeks out, start telling the problem on the feed: the bug that annoyed you, the workflow that wasted your hours. Not "my product is coming" — the problem, with honesty. People who feel the pain become day-one upvoters.',
          'One week out, complete the destination: your project page with stack tags, screenshots and at least one build log. Launch-day traffic needs somewhere with depth to land, and a bare landing page wastes the spike.',
          'Also bank goodwill: comment thoughtfully on other builders\' work during those weeks. Launch week is when you withdraw social capital; the warm-up is when you deposit it.',
        ],
      },
      {
        h: 'Launch day, hour by hour',
        body: [
          'Submit early in the weekly cycle — more days on the board means more discovery upvotes. Immediately post the launch story to the feed: why you built it, with real screenshots. Then share the permalink to your outside channels — X, Discord, group chats — because imported early engagement creates the velocity that discovery browsers trust.',
          'For the rest of the day, your job is host: reply to every comment fast, thank every visible upvoter (their avatars are public on your post), fix any trivial bug someone reports within the hour and say you did. A responsive maker converts spectators into advocates.',
        ],
      },
      {
        h: 'The mid-week grind nobody posts about',
        body: [
          'Days two through four are where launches are quietly won or lost. Publish a progress update — "day 2: 40 signups, here is what surprised us" — because momentum posts re-surface your launch to members who missed day one.',
          'Ship something visible mid-week: a fix, a small feature request from a commenter, a performance improvement. Then post it, crediting the member who asked. Nothing markets a launch like visibly listening.',
          'By Friday, run the honest wrap: results, learnings, thanks. It is content in itself, it closes the story gracefully, and it sets up next month\'s retrospective.',
        ],
      },
      {
        h: 'Taglines and categories: the click decision',
        body: [
          'Your card competes at a glance: logo, name, one tagline, category tags. The taglines that win answer "what does it do for whom" in under ten words — "Fact-check any video, article or tweet with your AI agent" (Bullshit Detector) and "Clean, predictable slug generation for modern TypeScript apps" (Sluggit) are the current board\'s masters.',
          'Choose category tags the way voters browse them: pick the two or three communities most likely to care — AI, Open Source, DevTools, Productivity, Web App — rather than everything vaguely applicable.',
          'Test the tagline like an ad: say it to a friend who does not know the product. If they cannot repeat the promise back to you, rewrite it before you launch.',
        ],
      },
      {
        h: 'After the board: making a spike permanent',
        body: [
          'The leaderboard resets weekly, but the assets a launch creates are permanent. Screenshot your TOP rank into your portfolio blocks and project page — social proof has no expiry date. Write the retrospective build log: what ranked, what converted, what you would do differently. Retrospectives are reliably excellent feed content.',
          'Then convert attention into graph: follow back the engaged, invite the most interested into your Project Room or company page orbit, and put their feedback on the public roadmap. Your next launch starts with the audience this one built.',
          'Finally, keep the streak alive through the post-launch dip. The week after a launch is exactly when most makers vanish — which is exactly when staying visible differentiates you.',
        ],
      },
      {
        h: 'What not to do on Launch',
        body: [
          'Never trade upvotes or mass-DM strangers; the community is small and long-memoried, and upvoter avatars make voting patterns visibly strange. Never launch without a working link — nothing burns goodwill faster than a broken demo on day one.',
          'Do not argue with sceptical commenters; answer them once, substantively, and let the thread speak. And never treat a weak ranking as failure: Peermeld\'s own team celebrates participation culture, and a gracious TOP 3 with visible follow-through builds more reputation than a sullen #1.',
        ],
      },
    ],
    faqs: [
      ['How do I submit a product to Peermeld Launch?', 'Prepare your logo, tagline, categories and live link, then enter the current week from the Launch page at peermeld.com/launch. Announce it on the feed with the story behind the product.'],
      ['When in the week should I launch?', 'As early as possible — submissions early in a weekly cycle collect days of extra discovery upvotes compared to Friday entries.'],
      ['How many upvotes do I need to rank?', 'Real leaderboards have been topped with numbers in the low double digits and TOP 3 with a handful — the weekly reset keeps the fight winnable. Every genuine upvote matters.'],
      ['Can I launch the same product twice?', 'Launch each meaningful version or major update as its own story. What the community dislikes is identical repetition; what it loves is watching a product climb version by version.'],
      ['What categories can I pick?', 'Tags like AI, Open Source, DevTools, Productivity, Web App and Social. Choose the two or three whose members will care most — relevance beats breadth.'],
      ['What if my launch flops?', 'Post the retrospective anyway. Honest post-mortems are some of the most-upvoted content in builder communities, and they turn a quiet week into a lesson people remember you for.'],
    ],
    outros: [
      (p) => `Launching is a skill, and Peermeld\'s weekly board is the cheapest place on the internet to practice it with real stakes. Ship the warm-up, run the week, keep the graph — and ${p.focus} becomes repeatable.`,
      (p) => `That is the complete campaign for ${p.focus}. The board resets Monday. Your product — or your next one — belongs on it.`,
    ],
  },
};
