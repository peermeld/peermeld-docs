/**
 * Content banks for the Peermeld blog generator — categories 6–10.
 */
export const banksB = {
  /* ------------------------------------------------------------------ */
  'networking-growth': {
    relatedDocs: [
      ['Network & Discovery', '/docs/network'],
      ['The directory', '/docs/network/directory'],
      ['Company pages', '/docs/network/companies'],
      ['Peer Match & Spaces', '/docs/network/peer-match'],
    ],
    intros: [
      (p) => `"It\'s not what you know, it\'s who you know" is only half true on Peermeld — here, who you know grows directly out of what you ship and how you show up. This article is the practical guide to ${p.focus}.`,
      (p) => `Peermeld was built to solve a specific problem: talented people with no network, and great teams with no way to see past CVs. The discovery systems it ships answer both sides. Today we dig into ${p.focus}.`,
      (p) => `Every collaboration, job offer and co-founder match on Peermeld starts the same way — two profiles finding each other at the right moment. Here is how to make that moment happen on purpose, via ${p.focus}.`,
    ],
    sections: [
      {
        h: 'The four discovery streams',
        body: [
          'People find you on Peermeld through four converging channels: the feed, where great posts pull profile visits; the /grow directory, where your card sells you at a glance; search and stack tags, which answer "find me a React + Postgres person who ships"; and reputation surfaces like Top Streaks This Week and the Launch board.',
          'Networking strategy is simply feeding all four streams at once. A complete profile covers the directory. Daily posts cover the feed. Honest stack tags cover search. Consistency covers the streak surfaces. Miss any one and you are invisible to a whole category of opportunity.',
        ],
      },
      {
        h: 'Directory cards that stop the scroll',
        body: [
          'In the /grow directory you are a card among cards: banner, avatar, name, role, flag, one headline. The members who get clicked treat that card like a landing page — a banner that shows real work, a standard searchable role title, and a headline with a proof point, like "two launches on Peermeld" or "Kafka and gRPC specialist".',
          'The NEW badge deserves strategy too: fresh members are highlighted automatically, so make your first-week impressions count by completing everything before the badge fades. First impressions in the directory are effectively permanent — most people browse it when hiring or looking for collaborators, with intent.',
        ],
      },
      {
        h: 'From first comment to real collaboration',
        body: [
          'The anatomy of a Peermeld collaboration is remarkably consistent: thoughtful comment on someone\'s post, a follow, a few weeks of mutual engagement, then a specific proposal — "I built the auth layer for exactly this stack; want to pair on the API?" Specificity is what separates networking from bothering people.',
          'Project Rooms formalise the jump: post a scoped idea, recruit from your engaged circle, coordinate visibly, ship to Launch. Public collaboration is also marketing — the feed watches the room, and your next collaborator is often a spectator first.',
          'One warning from every experienced member: give before you ask. Upvotes, answers and genuine feedback are deposits. Requests are withdrawals. The account must be funded first.',
        ],
      },
      {
        h: 'Why company pages punch above their weight',
        body: [
          'A company page is not just a brochure: once team members link to it, the company logo badges beside every post they publish — suddenly the intern\'s build log and the founder\'s changelog both carry the brand. Look at how the official Peermeld page works: a tight "Who we are", a People grid with roles like Admin, and posts that consistently trend.',
          'For startups, this means your employer brand grows from employees\' normal activity, with zero extra content budget. For members, affiliating with a good company page transfers instant credibility — and it places your face on the company\'s roster where hiring-minded visitors browse.',
        ],
      },
      {
        h: 'Meld Spaces and the depth advantage',
        body: [
          'The main feed is the town square; Meld Spaces are the workshops. Niche communities compress reputation-building because the same hundred people see every contribution — three valuable posts in a Space make you "that helpful person" faster than thirty posts to the general feed.',
          'The tactic: pick one or two Spaces exactly overlapping your craft, show up with questions and answers weekly, then occasionally steer the best discussions back to the main feed for wider reach. Depth in a Space plus breadth on the feed is the strongest one-two in Peermeld networking.',
        ],
      },
      {
        h: 'Global Search: being found while you sleep',
        body: [
          'Recruiters and founders use Global Search the way engineers use grep: concrete terms, real stacks, available-now signals. There is no search console to game — your findability is the sum of your role field, headline keywords, project stack tags, portfolio blocks and activity recency.',
          'Audit yourself once a month like a stranger would: search your own stack and role, and see whether you would click you. Every gap between what you can do and what your profile states is an invisible missed opportunity — close the top gap each month and findability compounds quietly.',
        ],
      },
      {
        h: 'A weekly networking routine that is not gross',
        body: [
          'Fifteen minutes, three times a week. Monday: engage with five people in your niche on the feed — real comments, no templates. Wednesday: scan /grow for one interesting stranger and start a public conversation on their latest post. Friday: reply to everyone who engaged with you this week; gratitude scales.',
          'Run this for a quarter and the results feel uncanny — interview invitations, beta users, a co-builder for the thing you almost abandoned. None of it is luck; it is the arithmetic of consistent, generous visibility.',
        ],
      },
    ],
    faqs: [
      ['How do I get my first 100 followers on Peermeld?', 'Complete your profile, post daily, and give more than you take: three upvotes, three substantive comments and three follows a day. Followers are the residue of generosity plus consistency.'],
      ['What is Peer Match?', 'Peermeld\'s pairing system for cross-disciplinary collaboration — it surfaces complementary people (designer for your app, backend for your frontend). Better profiles get better matches.'],
      ['How do I join a Project Room?', 'Watch the feed and Meld Spaces for open calls, or start your own with a scoped two-week idea and recruit from the members already engaging with your posts.'],
      ['Do company pages get followers?', 'Yes — company pages can post, and their logo badges beside employee posts create constant discovery. The official Peermeld company page shows the model: changelogs that top Trending.'],
      ['Is cold messaging okay on Peermeld?', 'Public-first works better: comment substantively on someone\'s work before any ask. When you do reach out, reference their specific post or project — specificity is the difference between networking and spam.'],
      ['How do recruiters use Peermeld?', 'Via Global Search, stack tags, the directory, and reputation surfaces like streaks and Launch rankings. They are scanning for proof of shipped work — which is precisely what a maintained profile provides.'],
    ],
    outros: [
      (p) => `Networking on Peermeld is not a separate activity from using the platform well — it is the emergent result of showing up, generously and consistently. Put ${p.focus} into practice this week and watch who shows up in your orbit.`,
      (p) => `You now know how ${p.focus} really works. The next collaboration that changes your career is one thoughtful comment away.`,
    ],
  },

  /* ------------------------------------------------------------------ */
  'rewards-streaks': {
    relatedDocs: [
      ['Rewards overview', '/docs/rewards'],
      ['Streaks', '/docs/rewards/streaks'],
      ['Peers Wallet', '/docs/rewards/wallet'],
      ['Changelog', '/docs/changelog'],
    ],
    intros: [
      (p) => `Most platforms extract your consistency and call it engagement. Peermeld does the opposite: it built streaks, a weekly consistency leaderboard, the Peers Wallet and a reward system to pay your consistency back. This guide covers ${p.focus}.`,
      (p) => `The August 2026 changelog was a quiet earthquake: Top Streaks This Week, the Peers Wallet, and a reward system, all in one update. If you understand how these pieces interlock, you understand the future of ${p.focus}.`,
      (p) => `Ask the members climbing fastest on Peermeld and they will tell you the same secret: it is not talent, it is streaks. Here is the complete playbook for ${p.focus}.`,
    ],
    sections: [
      {
        h: 'What actually counts as activity',
        body: [
          'A streak day means genuine participation: publishing a post, commenting or replying in a discussion, upvoting others\' work, or shipping something — a build log, a project update, a portfolio block. The systems are designed around real contribution, and the community\'s small size makes hollow activity visible anyway.',
          'The exact weighting is evolving — the changelog notes streaks are still being improved — so the robust strategy is simple: every day, do at least one thing you would be proud to have on your public record. That always counts, whatever the final formula.',
        ],
      },
      {
        h: 'Top Streaks This Week: the quiet leaderboard',
        body: [
          'Added in the recent changelog, Top Streaks This Week is Peermeld\'s weekly showcase of its most consistent members. It is the one leaderboard that ignores follower counts entirely — a first-month member with seven honest days of work stands beside veterans.',
          'The compounding effect is real: leaderboard placement drives profile visits, visits convert to follows on complete profiles, and followers power every future post. Consistency is doing double duty — building your habit and your distribution at once.',
        ],
      },
      {
        h: 'The Peers Wallet and reward system',
        body: [
          'The Peers Wallet is your on-platform wallet — the ledger where value from the reward system accumulates. Daily activity, streaks, launches and achievements flow in; the balance becomes a tangible record of reputation that the team has signalled will only grow more useful over time.',
          'These are the youngest features on the platform, which is exactly why they matter strategically. Every platform economy in history — GitHub\'s contribution graph, Stack Overflow\'s reputation — rewarded its earliest steady participants for decades. Your wallet history starts the day your streak does, and history cannot be backdated.',
        ],
      },
      {
        h: 'Designing a streak that survives real life',
        body: [
          'Streaks die from forgetting, not laziness. Attach the habit to an anchor you never skip — morning coffee, the commute, the end-of-day shutdown — and keep a backlog of post ideas for empty-brain days: bugs you hit, things you learned, quick takes on tools you tried.',
          'Define your minimum viable day before you need it: one thoughtful comment and three upvotes takes four minutes and keeps the flame alive through crunch weeks. Never miss twice is the only rule that matters — one gap is an accident, two is a new habit.',
        ],
      },
      {
        h: 'Milestones are content',
        body: [
          'Posting streak milestones — "day 30 of daily shipping" — reliably earns warm upvotes, because builder communities celebrate visible discipline. But the deeper value is accountability: announcing day 30 publicly makes day 31 much harder to skip.',
          'Pair milestones with evidence: a collage of the month\'s posts, your best build log, a metric that moved. Milestone posts with proof travel far beyond your follower circle, because they are the exact content the Trending tab exists to surface.',
        ],
      },
      {
        h: 'Reputation compounds into opportunity',
        body: [
          'Follow the causal chain once: daily activity keeps the streak; the streak powers leaderboard visibility; visibility grows followers; followers amplify posts and launches; launches and trending posts earn awards and rewards; rewards accrue in the Peers Wallet; and the whole record — public, dated, verifiable — becomes the strongest CV section you own.',
          'No single day on this chain feels dramatic. That is the nature of compounding: boring inputs, exponential outputs, and a gap that becomes uncatchable for anyone who starts a year later than you.',
        ],
      },
      {
        h: 'Integrity: the economy\'s immune system',
        body: [
          'Where there are rewards there is farming, and Peermeld\'s defence is partly social: it is a small network where low-quality volume is noticed, and upvoter avatars make patterns public. The pragmatic point for honest members is simple — farming is both uncool and unnecessary, because the genuine path (one good post a day) is already the optimal one.',
          'Play the long game and the economy\'s growth is pure upside for you: every improvement the team ships to rewards increases the value of the history you have already built.',
        ],
      },
    ],
    faqs: [
      ['What counts toward a Peermeld streak?', 'Posting, commenting, replying, upvoting and shipping (build logs, project updates, portfolio work). Any genuine daily participation keeps the streak alive.'],
      ['What happens if I miss a day?', 'The streak resets — which is why the minimum-viable-day plan exists. One comment and three upvotes protects months of history in four minutes.'],
      ['What is the Peers Wallet for?', 'It is the on-platform wallet where value earned through the reward system accumulates. The feature is new and expanding; early consistent history is the advantage.'],
      ['How do I get on Top Streaks This Week?', 'Be active every day of the week with genuine participation. It is the one ranked surface with zero dependence on follower count.'],
      ['Are rewards monetary?', 'The reward system converts activity and achievements into value held in the Peers Wallet; specifics evolve via the changelog. Treat early participation as an investment in the platform\'s growing economy.'],
      ['Can I buy or fake streak progress?', 'No — and you would not want to. The entire value of a streak is that it is costly to fake: it is time-stamped proof you show up. That is precisely what collaborators and employers pay attention to.'],
    ],
    outros: [
      (p) => `Consistency is the one growth lever available to everyone equally. ${p.focus} is how Peermeld pays you for it — and the best day to start was the day you first read about streaks. The second best is today.`,
      (p) => `That is the full picture on ${p.focus}. Protect the streak, trust the compounding, and let the leaderboard find you — it will.`,
    ],
  },

  /* ------------------------------------------------------------------ */
  comparisons: {
    relatedDocs: [
      ['Introduction', '/docs'],
      ['Quickstart', '/docs/quickstart'],
      ['The Feed', '/docs/feed'],
      ['Launch', '/docs/launch'],
    ],
    intros: [
      (p) => `Choosing where to invest your scarce building and sharing time is a real decision with compounding consequences. This is an honest field guide to ${p.focus} — what each platform is genuinely good at, and where the trade-offs sit.`,
      (p) => `No platform is best at everything, and pretending otherwise insults your intelligence. So here is the fair, detailed comparison for ${p.focus} — including the cases where the honest answer is "use both".`,
      (p) => `Every builder we know runs the same calculation: limited time, many platforms, which ones actually move a career? Let us settle ${p.focus} with specifics instead of vibes.`,
    ],
    sections: [
      {
        h: 'The core difference in one paragraph',
        body: [
          'Peermeld is work-first: the atomic unit is proof — a post about something you built, a project with stack tags, a launch with upvotes, a streak you cannot fake. The profile is the byproduct of activity. Most legacy networks are title-first: the atomic unit is the role claim, and activity decorates it.',
          'That single inversion explains most practical differences: who gets seen (consistent shippers), what content performs (changelogs, demos, questions), and what a profile convinces people of (that you finish things).',
        ],
      },
      {
        h: 'Audience and what they reward',
        body: [
          'Peermeld\'s community is concentrated: developers, designers, founders and creators who build. The feed\'s Trending tab reliably elevates build-in-public updates, honest tool takes, numbered changelogs and specific questions — engagement comes from peers who could be your users or co-founders.',
          'Massive generalist networks offer scale but dilute attention: your React build log competes with corporate anniversaries and viral outrage. On Peermeld, the same post competes only with other builders\' work — a smaller pond, and for early careers a far more nourishing one.',
        ],
      },
      {
        h: 'Discoverability and SEO',
        body: [
          'Here Peermeld plays an unusual card: the free yourname.peermeld.com subdomain with a built-in SEO preview. Your profile is a real, crawlable personal website whose domain literally contains your name — with your posts, portfolio blocks and projects feeding it fresh indexable content.',
          'Elsewhere, your profile lives at a deep path on someone else\'s domain where the platform, not you, captures most of the ranking equity. Personal sites solve ownership but demand maintenance; Peermeld\'s subdomain is the rare middle path — owned-feeling, zero-infrastructure, and wired into an active community that feeds it.',
        ],
      },
      {
        h: 'The opportunity funnel',
        body: [
          'Opportunities on Peermeld flow through proof-of-work: Global Search over stacks and roles, the /grow directory, Top Streaks, and Launch rankings. Recruiters and founders browsing here see your Media tab, your build logs and your consistency record — signals that predict job performance far better than endorsed skill lists.',
          'Legacy platforms still win on raw recruiter volume — headcount has gravity. The mature play for most builders: keep a polished presence everywhere, but invest daily effort where marginal effort wins the most — and on a young, meritocratic network, marginal effort wins dramatically more.',
        ],
      },
      {
        h: 'Launching and distribution',
        body: [
          'If you ship products, compare launch surfaces honestly: giant boards mean thousands of daily entries where great tools die in the new queue, while Peermeld\'s weekly leaderboard resets every Monday and has been topped with low-double-digit upvotes — with every voter being an actual builder.',
          'Distribution quality differs too. An upvote on Peermeld arrives with a visible avatar and a potential collaborator attached; the feedback quality in launch threads trends toward the technical ("how did you handle offline sync?") rather than the performative.',
        ],
      },
      {
        h: 'Where the honest trade-offs sit',
        body: [
          'Fairness demands the other side: Peermeld is young. The audience is smaller, the network effects newer, and some features (streaks, rewards) are explicitly still evolving in public changelogs. If your goal is reaching a million strangers this quarter, incumbent platforms have the pipes.',
          'But if your goal is being known by the right thousand — the builders who fund, hire, join and amplify — early presence on a rising network has historically been the single highest-leverage career move available. That was true of early GitHub, early dev.to, early everything.',
        ],
      },
      {
        h: 'The use-both playbook',
        body: [
          'The answer is rarely either/or. Use the giants as broadcast: enjoy their reach, recycle your best Peermeld content outward, and let their scale send curious visitors inward. Use Peermeld as home base: the canonical subdomain, the deepest portfolio, the daily habit, the community that knows your name.',
          'Practically: publish natively on Peermeld first, syndicate the winners outward after a day, and always link back to your subdomain. Over a year you get both networks\' upside with one stream of work.',
          'Careers are portfolio theory. Peermeld is the high-growth asset you buy early and hold.',
        ],
      },
    ],
    faqs: [
      ['Should I leave other platforms for Peermeld?', 'No — run a hub-and-spoke model. Peermeld as the home base with your deepest proof of work; others as broadcast channels pointing inward. One workflow, multiple surfaces.'],
      ['Is Peermeld big enough to matter?', 'Careers are changed by dozens of the right connections, not millions of impressions. Young, concentrated builder networks are precisely where those connections form — and where early members capture outsized mindshare.'],
      ['What does Peermeld do that LinkedIn cannot?', 'A free name-bearing subdomain, work-first profiles with build logs and portfolio blocks, a weekly winnable product leaderboard, and reputation systems (streaks, wallet, rewards) keyed on consistency rather than title prestige.'],
      ['Is the audience only developers?', 'Developers are the majority today, but the platform explicitly welcomes designers, founders, creators and every profession that helps great work happen — and the features (portfolio blocks, Spaces, Rooms) reflect that.'],
      ['How much time does the use-both strategy cost?', 'About fifteen minutes daily on Peermeld (the loop: one post, three upvotes, three comments, three follows) plus a weekly recycle of your best post outward.'],
      ['Will my old content port over?', 'Your best posts, project write-ups and portfolio pieces can all be republished natively — fresh content actually performs better than backdated archives, so curate the top ten percent and reframe it for builders.'],
    ],
    outros: [
      (p) => `The honest verdict on ${p.focus}: different tools, different physics. Grab the unique leverage — the subdomain, the winnable leaderboards, the work-first community — while it is still early enough to matter.`,
      (p) => `That is the fair comparison for ${p.focus}. Platform choice is compound interest: pick where your daily effort buys the most future, then show up daily.`,
    ],
  },

  /* ------------------------------------------------------------------ */
  professions: {
    relatedDocs: [
      ['Quickstart', '/docs/quickstart'],
      ['The Feed', '/docs/feed'],
      ['Projects', '/docs/projects'],
      ['Network & Discovery', '/docs/network'],
    ],
    intros: [
      (p) => `Peermeld\'s features look different through every professional lens — the same Feed, Launch board and portfolio engine solve very different problems depending on who you are. This guide maps them precisely for ${p.focus}.`,
      (p) => `Generic platform advice fails because careers are not generic. Here is the specific playbook for ${p.focus} — which surfaces matter most for you, what to post, and how to turn Peermeld into leverage for your particular goals.`,
      (p) => `We studied how the most effective members in your position actually use Peermeld — what they post, what they skip, and what compounds. Consider this your role-specific onboarding for ${p.focus}.`,
    ],
    sections: [
      {
        h: 'Your highest-leverage surface on Peermeld',
        body: [
          'Every profession has one Peermeld surface that returns ten times the others. Find yours and invest there first: the feed for voices, project pages and build logs for builders, portfolio blocks for visual crafts, the Launch board for products, company pages for teams, the directory and Peer Match for anyone hiring or collaborating.',
          'The mistake to avoid is spreading thin across all eight features in week one. Master your primary surface until it produces visible returns — followers, replies, inbound messages — then layer the secondary ones. Depth before breadth is the pattern behind every strong profile on the platform.',
        ],
      },
      {
        h: 'What to post (role-specific)',
        body: [
          'The universal Peermeld formula is one-third progress, one-third knowledge, one-third questions — but the raw ingredients are role-specific. Developers post bugs conquered and stack decisions. Designers post before/afters and process. Founders post numbers and lessons. Students post learning logs. Freelancers post shipped client outcomes (with permission).',
          'Whatever your role, attach evidence: the feed\'s Trending tab consistently rewards posts with screenshots, embeds and artifacts over pure text. Your Media tab quietly becomes a gallery that sells you while you sleep.',
          'When in doubt, teach. The member who explains a thing clearly becomes the member associated with knowing the thing — and that association is your professional brand\'s core asset.',
        ],
      },
      {
        h: 'Turning profile features into your advantage',
        body: [
          'Re-read your profile through your audience\'s eyes. Hiring managers read your Replies tab for how you treat people; clients read your portfolio blocks for outcomes; collaborators read your build logs for how you decide; everyone reads the streak for whether you finish things.',
          'Then edit deliberately. Your headline names the role you want next, not just the one you have. Your stack tags match the searches your dream opportunity would run. Your banner shows the work you want more of. Peermeld gives you the fields; positioning is what you pour into them.',
        ],
      },
      {
        h: 'The network you should actually build',
        body: [
          'Aim for a follow graph of three rings: thirty people in your exact craft (your peers and rivals — you will learn the most here), thirty in adjacent crafts you collaborate with, and thirty you aspire toward — the operationally out-of-reach today who set your standards.',
          'The /grow directory, Peer Match and Meld Spaces exist precisely to assemble those rings. And because Peermeld is young, the aspiring ring is unusually accessible: the people trending this month reply to comments personally.',
          'Nurture the graph with the 3-3-3 habit — three upvotes, three real comments, three follows daily — and it will quietly become the most career-valuable data structure you own.',
        ],
      },
      {
        h: 'Opportunities: how they actually arrive',
        body: [
          'Track the real causal chains members report: a streak lands you on Top Streaks; a trending build log gets screenshot-shared off-platform; a helpful Replies tab gets forwarded to a hiring manager; a Launch rank becomes a portfolio bullet; a Project Room collaboration becomes a reference.',
          'Notice the pattern — none of these arrive through applications or cold outreach. They arrive as inbound, triggered by public proof. Your job is manufacturing the proof: posting, shipping, logging, engaging. Peermeld\'s surfaces handle the distribution.',
          'This is why the "I\'ll network when I need a job" strategy fails everywhere and Peermeld especially: the proof must exist before the opportunity arises. Build in public now so the right person finds a year of evidence, not a freshly padded profile.',
        ],
      },
      {
        h: 'A month-one plan for your role',
        body: [
          'Week one: complete the profile, claim the exact-name subdomain, and publish your intro post with a visual. Week two: start your proof engine — build logs if you code, blocks if you design, launch warm-up if you ship products — plus daily 3-3-3 engagement.',
          'Week three: publish your first flagship post — the tutorial, teardown or lesson only you could write — and join the Meld Spaces in your niche. Week four: review what the data says (upvotes, comments, follows per post) and double the winning category.',
          'Thirty days is enough for a visible streak, a warm graph and a profile with proof. That combination outperforms most polished CVs already.',
        ],
      },
    ],
    faqs: [
      ['Is Peermeld worth it for my profession?', 'If your work has any visible artifact — code, designs, products, writing, analyses — yes: Peermeld is built to convert artifacts into opportunity. The directory already hosts everyone from founders to students.'],
      ['How much time do I need daily?', 'Fifteen minutes covers the full loop: one post, three upvotes, three comments, three follows. Consistency at fifteen minutes beats binge effort by an embarrassing margin.'],
      ['Do I need to be senior for people to care?', 'No — build-in-public culture values honesty about the journey. "Junior dev, week 4 of learning Rust, here\'s what confused me" performs beautifully because peers remember being there.'],
      ['Should I separate personal and professional content?', 'Peermeld tilts professional but human: tool takes, lessons and work-in-progress belong; keep the personal details that make you memorable, skip what you would not want quoted in an interview.'],
      ['How do I find people in my field there?', 'The /grow directory by role and headline, Global Search by stack, Meld Spaces by niche, and simply engaging with the Trending tab — your field\'s people announce themselves through their posts.'],
      ['What is the fastest visible win?', 'A complete profile plus five consecutive days of genuine activity. A short streak and fresh media-rich posts transform how the next visitor perceives you within one working week.'],
    ],
    outros: [
      (p) => `Your profession has carried its proof-of-work problem forever — invisible effort, unverifiable claims. ${p.focus} is how Peermeld solves it: daily proof, publicly dated, permanently yours. Start the record this week.`,
      (p) => `That is the full playbook for ${p.focus}. The platform is young, the competition sparse, and the streak starts the day you do.`,
    ],
  },

  /* ------------------------------------------------------------------ */
  'advanced-strategy': {
    relatedDocs: [
      ['Feed strategy', '/docs/feed/feed-strategy'],
      ['Profile SEO', '/docs/profile/profile-seo'],
      ['Launch playbook', '/docs/launch/launch-playbook'],
      ['Streaks', '/docs/rewards/streaks'],
    ],
    intros: [
      (p) => `You have the fundamentals: a complete profile, a daily loop, a live streak. Now the leverage layer — the strategies that separate Peermeld\'s fastest-growing members from everyone doing the basics. Today: ${p.focus}.`,
      (p) => `This is a power-user guide. It assumes your profile is complete and your streak is alive, and it is about making every hour you invest return three. The subject: ${p.focus}.`,
      (p) => `Once the basics become habit, growth on Peermeld is a systems problem: which loops feed which assets, and where the compounders hide. Let us engineer ${p.focus} properly.`,
    ],
    sections: [
      {
        h: 'The multi-surface flywheel',
        body: [
          'Stop thinking in features and start thinking in pipelines. The master loop: feed post creates attention → attention visits profile → profile shows projects and portfolio → projects carry build logs → logs become more feed posts → the best post becomes a Launch → the Launch rank becomes a portfolio credential → the circle closes with new followers feeding the next post.',
          'Every piece of work should traverse the whole loop at least once. Members stall when work dies on one surface — a project with no feed coverage, a trending post whose profile ends nowhere. Audit your last five pieces of output and find where each leaked out of the loop.',
        ],
      },
      {
        h: 'Instrumenting growth without analytics',
        body: [
          'Until dashboards ship, measure what you can touch: a weekly spreadsheet of followers, your best post\'s 24-hour upvotes, comments per post, and how many profile visits convert to follows (estimate via follow timing after posts). Thirty rows of honest data beat a thousand vibes.',
          'The two ratios that matter: comments per upvote (discussion-worthiness) and follows per post (conversion). Improving the first makes the algorithm carry you; improving the second makes the audience accumulate. Review monthly, double what works, kill what flatlines.',
        ],
      },
      {
        h: 'The repurposing lattice',
        body: [
          'One deep piece of work should spawn at least five artifacts. A shipped feature becomes: the build log (depth), an announcement post (reach), a lesson-learned post (teaching), a screenshot for the Media tab (proof), a portfolio block update (credential), and — when the pile is big enough — a Launch (the spike).',
          'This is not spam; each artifact serves a different audience context. The discipline is the one-week delay between surfaces, so each appearance has fresh framing rather than copy-paste. Recycled verbatim posts are the one pattern this community visibly punishes.',
        ],
      },
      {
        h: 'Off-peak timing as an edge',
        body: [
          'Everyone studies "best time to post"; fewer exploit the opposite. Posting solid content in quieter hours means your post owns the NEWEST tab longer — the overnight browsers and other-timezone members see you first, and your velocity number starts compounding before the crowd wakes.',
          'Peermeld\'s membership already spans timezones (the directory\'s flags make this visible). Map when your specific followers engage from your first months of data, then deliberately test the shoulder hours around that window before settling on dogma.',
        ],
      },
      {
        h: 'Subdomain SEO: the advanced layer',
        body: [
          'Advanced profile SEO is entity engineering: making yourname.peermeld.com the canonical node that every other platform points to. Cross-link from GitHub, X, and every profile you control; use identical name, avatar and headline fragments everywhere so search engines and LLMs merge the identities confidently.',
          'Then feed the entity: publish one substantive, indexable artifact weekly (a build log counts), keep the SEO preview snippet tight, and watch branded search ("your name + your stack") within three months. The flywheel quietly converts your posting habit into search real estate most people pay agencies for.',
        ],
      },
      {
        h: 'Community positioning: become the answer person',
        body: [
          'The fastest durable reputation on any builder network is owning a question category. Pick the niche where you are ahead of the pack — a framework, a deployment stack, a design system — and answer every public question about it you see, thoroughly and kindly.',
          'Peermeld\'s scale makes this attainable: a few categories, a few hundred active voices. Within a quarter your name becomes attached to the topic; members tag you implicitly by posting questions shaped like your answers. No follower count shortcut replicates this moat.',
        ],
      },
      {
        h: 'Quarterly strategy reviews',
        body: [
          'Strategy decays as the platform ships. Every quarter, re-read the changelog (the August updates alone added streaks leaderboards, the wallet and rewards), re-audit your profile, and re-pick your two primary surfaces. What worked at one-stage Peermeld will not be optimal at the next.',
          'Ask three questions: where did followers actually come from? Which artifact type drove inbound opportunities? What is newly launched that I am not using? Then rebalance the next quarter\'s effort like the portfolio it is.',
        ],
      },
    ],
    faqs: [
      ['What is the single highest-leverage Peermeld habit?', 'One substantive post per day linked to a real piece of work — it feeds the streak, the Media tab, your SEO freshness, and the follower graph simultaneously. Every advanced strategy presumes it.'],
      ['How do I measure Peermeld ROI without analytics?', 'Track weekly: followers, best-post upvotes, comments per post, and inbound messages or opportunities. Thirty days of honest rows reveal your personal growth levers better than any dashboard summary.'],
      ['Is cross-posting from other platforms okay?', 'Yes, with adaptation: same idea, rebuilt framing for a builder audience, native visuals, and Peermeld-first publication. Verbatim syndication reads as low-effort here and underperforms.'],
      ['How many surfaces should I use at once?', 'Two primary, one experimental. Example: feed + build logs as primaries, Launch as the quarterly experiment. Adding surfaces slower than the platform launches them is sustainable; chasing all eight is not.'],
      ['Does buying followers or engagement trades work?', 'No — upvoter avatars are public and the community is small. Visible gaming poisons the one asset you are here to build: trusted reputation.'],
      ['When do advanced tactics matter more than basics?', 'Only after thirty consecutive days of the daily loop. Fundamentals compound linearly at first; these strategies multiply a base that must already exist.'],
    ],
    outros: [
      (p) => `Advanced strategy is just fundamentals, instrumented and looped. Apply ${p.focus} for one quarter — measuring honestly as you go — and you will outgrow most advice, including this.`,
      (p) => `That completes ${p.focus}. The platform will keep shipping new surfaces; operators who review quarterly and rebalance will keep eating the compounding.`,
    ],
  },
};
