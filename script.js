// ── Article data ──────────────────────────────────────────────────────────────
const clips = [
  {
    title: "Cellphone Rivers, Wafer Mountains: How Technology Deprives Taiwan's Nature",
    publication: "Business Weekly",
    date: "August 2, 2023",
    authors: "Guozheng Lyu, Wuyuan Guan, Yumeng Zheng, Naizheng Yang, Sammy Liu",
    thumbnail: "assets/phoneriver00.jpg",
    process:[
      "Inspired by the 2014 documentary Beyond the Beauty, which used aerial photography to catalyze Taiwan's environmental reform movement, I analyzed a decade of water pollution penalty records, land reclassification data, and satellite imagery across Taiwan. I found the country's largest pollution source over 10 years was a government-run industrial park, a hub for iPhone manufacturing.",
      "Ahead of stricter regulations, local governments accelerated land reclassifications—downgrading protections from special agricultural zones to general agricultural or industrial zones. In the most controversial case, TSMC razed a Hakka village with citrus orchards and a century-old hilltop temple to build semiconductor fabs within two years.",
      "The investigation received a 2024 SOPA Award honorable mention for Excellence in Reporting on the Environment and won the 2024 Sustainable and Constructive News Award.",
    ],
    description: [
      { image: "assets/phoneriver01.jpg"},
      { image: "assets/phoneriver02.png"},
      { image: "assets/phoneriver03.png"},
      { image: "assets/phoneriver04.png"},
      { image: "assets/phoneriver05.png"},
      "Ten years ago, Chi Po-Lin's aerial documentary \"Beyond Beauty: Taiwan from Above\" showed us the scars and marks on this land. Ten years later, have we progressed? Has Taiwan improved?",
      "To answer this, the Business Weekly decided to interpret Taiwan through data, travel across the country to film, and interview people from industry, government, and academia, attempting to piece together the truth about Taiwan's industries and environment.",
      "Taiwan has a formidable smartphone supply chain industry and is the world leader in foundry manufacturing, but at the same time, they are also consuming large amounts of Taiwan's environmental resources.",
      "We see a river glowing with a gloomy blue light, carrying wastewater discharged by the smartphone supply chain industry and other factories. We also see that in order to maintain semiconductor competitiveness and national security, a mountain and a Hakka village have been flattened; farmland, orchards, and fish ponds have disappeared, replaced by endless solar panels.",
      "We do not oppose economic growth and industrial upgrading, and we support Taiwan's energy transition towards net zero. But what Business Weekly wants to ask is: Can we only rely on one way – sacrifice – to transform and maintain national competitiveness?",
      "We have exchanged the cellphone river, wafer mountain, and solar panel slope for development, but it has also squeezed out the land, water, and rice we live on.",
      "It is possible that Taiwan’s future generations will not know: there should be fish in the rivers, not murky polluted water; there should be lush forests on the mountains, not majestic semiconductor fabs; the plains used to be fish ponds and rice fields, not shiny solar panels…",
      "Now, Taiwan stands at another critical moment, with a new leader to be elected next year. How can we change the destiny of this island?",
    ],
    link: "https://www.businessweekly.com.tw/bwevent/2023/plundered-island",
  },
  {
    title: "The Youth Wave in Taiwan's 2024 Legislative Election",
    publication: "Business Weekly",
    date: "January 20, 2024",
    authors: "Sammy Liu",
    thumbnail: "assets/youthwave00.jpg",
    process:["Following Taiwan's 2024 legislative election, I analyzed candidate data across three election cycles from the Central Election Commission to examine youth participation trends. While candidates under 40 dropped from 88 in 2020 to 60 in 2024, their success rate more than doubled to 21.7%. The Kuomintang won 10 of 13 young legislator seats, and young legislators from political families decreased from 75% to 54%.",
      "I designed visualizations showing the inverse relationship between candidate numbers and success rates, and timeline charts mapping individual career paths from local politics to legislative seats.",
    ],
    description: [
      "The 2024 Taiwanese legislative election results reveal a three-way split. Neither the Kuomintang (KMT) nor the Democratic Progressive Party (DPP) secured a majority, with the Taiwan People's Party (TPP) becoming a crucial minority.",
      "While many regions maintain their traditional \"blue\" or \"green\" loyalties, public dissatisfaction with this polarization has grown. The TPP’s campaign against the two-party system has resonated, making the 3 million young voters, known for low turnout, a key demographic. In response, parties have sought to refresh their images by nominating young candidates and claiming to represent younger interests. This strategy is evident in their nomination lists and strategic concessions in competitive districts.",
      "Now that the election has concluded, the effectiveness of this approach remains to be seen.",
      { heading: "Youth Candidate: Fewer but Stronger" },
      "Data from the past three legislative elections shows that while the number of regional and indigenous legislative candidates under 40 has decreased, their success rate has significantly increased.",
      { image: "assets/youthwave01.jpg"},
      "Youth candidate participation peaked after the 2014 Sunflower Student Movement. In the 2016 and 2020 national elections, the number of candidates under 40 reached 82 and 88, respectively. However, after the 10-year fever subsided, this year's number dropped to 60, primarily due to fewer young candidates from smaller parties. For example, the New Power Party went from 9 candidates in 2016 and 3 in 2020 to zero this year, the Taiwan Statebuilding Party dropped from 10 in 2020 to only 2, and the Taiwan People's Party fell from 6 to 2.",
      "Despite the decline in numbers, the political strength of young participants has grown. In 2016 and 2020, less than 1 in 10 young candidates made it into the legislature, but by 2024, the success rate rose to 21.7%, meaning 1 in 5 young candidates was elected.",
      { heading: "The Rise of Grassroots Youth"},
      "In the past, over 3/4 of the successful young legislators came from political families, but this year, the proportion decreased down to about half, with 7 out of the 13 seats occupied by such candidates. More young legislators are starting from the political grassroots and gaining momentum through the \"Youth Alliance.\"",
      { image: "assets/youthwave02.jpg"},
      "Compared to 2016, aside from Lin Ching-tse and Hung Tzu-yung, the others were all born into political families, including that year's youngest legislator, Lu Sun-ling, daughter of former New Taipei City councilor and current national policy advisor Lu Tzu-chang. Other political scions elected included Su Tseng-chang's daughter Su Chiou-hui and Tsai Yi-yu, rooted in Chiayi since his great-grandfather's time.",
      "In 2020, similarly, aside from Ko Chia-yu and Chen Po-wei (who was recalled in October 2021), the rest, including Ho Chih-wei, Hung Meng-kai, Chuang Ching-cheng, Huang Shih-chieh, and Lai Pin-yu, also had political family support.",
      "However, in 2024, among the \"This Generation\" coalition of 6 legislators brought together by the Sunflower Movement generation, Wu Pei-yi and Huang Chieh were elected. The KMT's \"F4\" in Taichung also had 3 members, Huang Chien-hao, Lo Ting-wei, and Liao Wei-hsiang, elected, showing the trend of young forces boosting each other's momentum.",
      "Among the non-political scions, Hsu Chiao-hsin, who has served as the KMT’s spokesperson in previous elections, won her first legislative race this year. Yu Hao, elected Nantou county councilor with the highest votes in 2018 and 2022, also narrowly defeated the incumbent DPP legislator Tsai Pei-hui in the Nantou this time.",
      "Candidates from political families still make up half of the young legislators elected, including Hung Meng-kai, son of former legislator Kuo Su-chun with influence in the northern coast area; Liao Hsien-hsiang, who defeated the incumbent DPP legislator Lai Pin-yu in a political scion showdown in New Taipei's 12th district; and Niu Hsu-ting, whose father is a founding member of the New Party, flipped a green stronghold and ended the DPP incumbent Cheng Yun-peng's three-term streak.",
      { image: "assets/youthwave03.jpg"},
      { heading: "KMT’s Youth Revolution?"},
      "The KMT overturned the \"old party\" image by winning 36 of the 73 regional legislative seats this year. Previously, the DPP and smaller parties had more young legislators. However, this year, out of the 13 elected young legislators, the KMT has 10, the DPP has 3, and the smaller parties have none.",
      "In examining the age structure of elected legislators over the past three terms, 2024 has the highest number of young legislators. Some emerged from the 318 Student Movement, while others have built their careers from party roles and local grassroots efforts, winning seats through hard work and support from local factions. Over the next four years, it will be interesting to see if these 13 young legislators can bring new reforms and a fresh atmosphere to the legislature.",
    ],
    link: "https://www.businessweekly.com.tw/focus/blog/3014540",
  },
  {
    title: "Prosperity Paradox: 5 Charts Explain Why Taiwan’s Salaried Class Feels the Pinch",
    publication: "Business Weekly",
    date: "September 18, 2023",
    authors: "Sammy Liu",
    thumbnail: "assets/prosparadox00.jpg",
    process:[
      "While Taiwan's GDP per capita exceeded South Korea's for the first time in 18 years in 2022, salaried workers reported feeling financially strained. I analyzed wage, inflation, and employment data to explain this disconnect: GDP per capita rose 42% over a decade while median salaries grew only 14%. Job growth concentrated in low-paying service sectors, and daily necessities like eggs surged 26.4%—far exceeding official inflation.",
      "I designed charts showing GDP versus wage divergence, employment patterns by wage level, and housing affordability reaching 20.1 years to buy a home.",
    ],
    description: [
      "Amid Taiwan’s economic progress, a paradox has emerged: the salaried classes still feel financially strained. What explains the disconnection between growth and perception?",
      { heading: "Economic thriving, but most workers are not reaping the rewards"},
      "Taiwan’s GDP thrived during the pandemic, driven by robust exports in manufacturing, especially electronics and precision machinery. In 2022, Taiwan’s GDP per capita exceeded South Korea’s for the first time in 18 years. However, most workers haven’t benefited.",
      { image: "assets/prosparadox01.jpg"},
      "The share of GDP allocated to employee compensation dropped to a new low of 43% in 2021, while the operating surplus increased. This means that while some companies have profited greatly from the pandemic-driven growth, the benefits to the general public have been limited. This is due to the pandemic directly impacting the service sector, where over 60% of Taiwan's workforce is concentrated.",
      "As a result, while GDP per capita rose 42% over a decade, salaries grew only 14%, reflecting a stark disconnect between national wealth and individual financial experiences. Even as the country appears to getting richer, half of employees only have seen sluggish 1/3 salary increases.",
      {heading: "Wages up, but workers crowd into low-pay sectors"},
      "After reopening, the service sector rebounded. The labor shortage has sparked wage increases in some industries. Real regular wages in wholesale & retail rose 162% and health & social work rose 129% in June 2023 compared to a year prior.",
      "However, the industries absorbing the most workers are the lowest-paying ones - arts, entertainment, accommodation, food services, and education. Their average real monthly wages in June 2023 were only around NT$34,000-27,000, compared to the overall average of NT$41,412. Furthermore, while the real wages rose 111% in accommodation and food services, they declined nearly 40% and 20% in arts & entertainment and education respectively.",
      { image: "assets/prosparadox02.jpg"},
      "While the job market has become more active and some industries have gained from the recovery, yet, more workers are crowded into low-pay sectors, with some even seeing salary decline.",
      { heading: "Not Everything's Inflating, but the Items We Need Most Are Climbing"},
      "While wage growth stagnated, prices rose sharply. In 2022, real regular wages saw negative growth for 7 months, meaning people's purchasing power was reduced. The official CPI increase was 3%, but is the public only feeling a 3% price hike?",
      "CPI measures the average price changes of \"all consumer goods and services\", while people feel more acutely about the price fluctuations of daily necessities. And unfortunately, everyday necessities saw higher increases: meat (5.7%), fuel (8.4%), and eggs (26.4%). These price hikes disproportionately affect lower-income groups who spend most of their budgets daily.",
      { image: "assets/prosparadox03.jpg"},
      "Housing affordability, excluded from CPI, adds significant financial pressure. Taiwan's housing affordability index reached 20.1 in 2023, meaning median wage earners need 20 years of savings to afford a median-priced home. Furthermore, the national mortgage burden ratio was 41.2% in the first quarter of 2023. Even for those who manage to take out a mortgage, over 40% of their income goes towards housing payments. In Taipei, the mortgage burden ratio even reaches 64.5%, demonstrating the immense economic burden of high housing prices for Taiwanese.",
      { image: "assets/prosparadox04.jpg"},
      { heading: "Not Actually Impoverished, but Others' Lavish Lifestyles Induce Feelings of Financial Failure"},
      "Social media's constant showcase of luxurious lifestyles, coupled with Taiwan's widening wealth gap, fuels a sense of relative deprivation. In 2021, the top 20% of households had 6.15 times the disposable income of the bottom 20%, with a Gini coefficient of 34.1% indicating increasing inequality.",
      { image: "assets/prosparadox05.jpg"},
      "Middle-class individuals, exposed to influencers' lavish lifestyles and the ultra-rich's extravagance, inevitably compare their situations unfavorably. This creates an illusion of personal financial inadequacy, even if living standards haven't actually declined.",
    ],
    link: "https://www.businessweekly.com.tw/focus/blog/3013312",
  },
  {
    title: "Daily Data Insight: Tracking the 2024 Presidential Election",
    publication: "Business Weekly",
    date: "January 1, 2024",
    authors: "Sammy Liu",
    thumbnail: "assets/2024elec00.jpg",
    process:[
      "For the final 30 days leading up to Taiwan's 2024 presidential election, I produced daily data graphics tracking the race for Business Weekly's readers. The series' centerpiece was an exclusive survey I helped coordinate with reporters across the newsroom, polling 515 executives from publicly traded companies representing manufacturing, technology, services, and finance sectors—with a combined market value exceeding NT$7 trillion. The survey revealed a major shift in business priorities: contrary to traditional campaign focus on cross-strait relations and military tensions, executives were more concerned about practical economic issues like power shortages, labor gaps, and talent recruitment, and preferred CPTPP membership over ECFA agreements.",
      "Over 30 consecutive days, I analyzed fresh data daily—including this exclusive survey, public polling trends, policy positions, and debate content—and designed distinct infographics in Illustrator and Flourish for each update. I varied formats based on the story: bar charts for policy comparisons, maps for regional patterns, and word clouds for debate topics. The sustained deadline pressure required maintaining both speed and editorial standards while collaborating with reporters to ensure accurate interpretation of the business leader data.",
    ],
    description: [
      { images: [
    "assets/2024elec01.jpg",
    "assets/2024elec02.jpg",
    "assets/2024elec03.jpg",
    "assets/2024elec04.jpg",
    "assets/2024elec05.jpg",
    "assets/2024elec06.jpg",
    "assets/2024elec07.jpg",
    "assets/2024elec08.jpg",
    "assets/2024elec09.jpg",
    "assets/2024elec10.jpg",
    "assets/2024elec11.jpg",
    "assets/2024elec12.jpg",]}],
    link: null,
  },
  {
    title: "Scorching Hot Summer! But This May Be the Coolest Ahead: 20 Years of Data Reveal",
    publication: "Business Weekly",
    date: "July 19, 2023",
    authors: "Sammy Liu",
    thumbnail: "assets/hot00.jpeg",
    process:[
    "As heat-related accidents surged in summer 2023, I analyzed 20 years of temperature data from Taiwan's Central Weather Bureau to understand changing heat patterns. In Taipei, extreme heat arrived earlier and lasted longer—days above 36°C reached 59 in 2020, double the historical average. Heat-related medical visits in July 2023 more than doubled compared to 2022.",
    "I designed a heat map calendar in Flourish and Illustrator showing temperature patterns across two decades, and created charts comparing medical visits and housing affordability impacts.",
    ],
    description: [
      "Can't stand this summer's heat? Don't be surprised—recent high temperatures have broken records dating back 120,000 years!",
      "This summer, high temperatures repeatedly shattered records—not just 10 or 20 year records. University of Maine Climate Reanalyzer data shows global average temperatures on July 6th set 4 consecutive days of \"Earth's highest recorded temperatures,\" traceable to the 120,000 year-old ice age. The UN urgently convened a press conference, warning \"climate change has spiraled out of control.\”",
      "As for Taiwan, since entering July, more than ten counties and cities have issued high-temperature alerts daily. Road signs have been \"melted by heat,\"and young farmers and construction workers across counties suffered heatstroke and fainting incidents. While this heat wave left citizens sweltering, meteorological experts warn \"this is just the beginning.\”",
      {image: "assets/hot01.png"},
      {heading: "Taiwan's 20-Year Data: Getting Hotter, Earlier, Longer"},
      "20 year summer daily maximum temperature data from the Central Weather Bureau's Taipei observation station reveals Taiwan's summers clearly became \"hotter.\”",
      "The 10 years prior to 2013 showed summers breaking 38°C only once every 2-3 years on average. However, the recent 10 years have seen summers exceeding 38°C every 1-2 years, with consecutive occurrences from 2016 to 2018.",
      "Taiwan's summers in the past 10 years have also begun heating up earlier. Consecutive 30°C high temperatures before 2013 typically didn't appear until after mid-June. The 2016 El Niño phenomenon brought 38°C temperatures as early as June 1st. The 2020 warming appeared even more severe, with the entire month of June having only one day below 30°C.",
      "The \"Taiwan Climate Change Report\" published collaboratively by Academia Sinica, the Ministry of Science and Technology, and the Central Weather Bureau indicates that Taiwan's summers will last longer. This report predicts that as early as 2060, Taiwan will have no winter. Taipei station data indeed shows extreme high-temperature days being continuously exceeded. Days above 36°C in 2020 reached 59 days, meaning two months each year are spent in extreme heat.",
      {image: "assets/hot02.png"},
      { heading: "The Increasingly Deadly \"Silent Killer\": Heat-Related Medical Visits Double"},
      "Being scorched by high temperatures goes far beyond the discomfort of profuse sweating. Extreme heat is the leading cause of weather-related deaths in the United States. In most years, heat causes more deaths than hurricanes, floods, and tornadoes combined.",
      "However, because it's invisible to the naked eye, the general public and even governments struggle to recognize that high temperatures pose urgent risks similar to typhoons and earthquakes. Nevertheless, the positive correlation between high temperatures and death risk has been confirmed. A collaborative study by the Chinese University of Hong Kong and the University of Hong Kong found that a single day of extreme heat increases death risk by 1.6%, while a single hot night increases death risk to 2.43%.",
      "Looking at Taiwan's Ministry of Health and Welfare statistics on heat-related injuries, just the first week of July this year saw 200 people seeking medical treatment for heat-related conditions, more than doubling compared to the same period last year. Taiwan's climate is muggy, and heat combined with high humidity creates a dangerous combination. When the human body struggles to cool itself through evaporating sweat from the skin, excess heat accumulates internally. When this exceeds the human body's tolerance of 40°C, it can lead to dizziness and nausea, heat cramps, heat exhaustion, and the most fatal condition—heatstroke.",
      {image: "assets/hot03.png"},
      "The surge in numbers shows that people have not yet recognized the potential threats of heat waves, and also indicates that current national regulations and warning systems seem insufficient to protect vulnerable groups in high temperatures. Looking at the basic data of heat-related medical visitors, Taichung City had the highest number of heat-related medical visits this year, followed by Kaohsiung City and Changhua County, with Taichung City leading for seven consecutive years.",
      "A heat wave report jointly published by the UN Office for the Coordination of Humanitarian Affairs (OCHA) and the International Federation of Red Cross and Red Crescent Societies (IFRC) states: \"Exposure to extreme heat is highly unequal.\" Income essentially determines the ability to cope with high temperatures. Even though Taiwan's air conditioning coverage exceeds 90%, for low-income families, \"whether they can afford to turn it on\" determines their level of danger exposure. Other vulnerable groups include working-class people, farmers, students, outdoor enthusiasts, and chronic disease patients surviving heat waves. According to Ministry of Health and Welfare statistics, these groups total up to 13 million people who are particularly susceptible to heat effects due to physical limitations and lack of ventilation and cooling equipment.",
      {heading: "Heat Waves Add Fuel to High Inflation, Burning Economic Growth"},
      "The threat of extreme heat extends beyond health to significant economic impacts. The International Labour Organization (ILO) estimates that when temperatures persist at 33-34°C, workers on average lose 50% of their productivity. The organization also predicts that by 2030, heat waves will reduce global working hours equivalent to 80 million full-time jobs. This will result in global GDP losses of nearly $2.4 trillion, equivalent to half of Japan's GDP.",
      {image: "assets/hot04.png"},
      "Beyond work productivity, Reuters columnist Antony Currie points out that inflation brought by the El Niño phenomenon could be a \"new economic hurricane\" following the COVID-19 pandemic and the Russia-Ukraine war.",
      "Barron's reports that the impact of the El Niño phenomenon on the world's top three sugar exporters—Brazil, India, and Thailand—has caused sugar prices to soar 27% this year. Australia, the world's second-largest wheat exporter, also estimates that total winter crop production will decline 34% from this year to next year.",
      "Although Taiwan is relatively less directly affected by the El Niño phenomenon, if typhoons form during this period, the El Niño effect could intensify their impact on Taiwan. If global food prices begin to surge, Taiwan will also find it difficult to escape unscathed.",
      "Summer is no longer about youthful beach sunshine for us, but rather a scorching threat that sweeps through all aspects of life. If we don't actively reduce carbon emissions and control global warming, will it get even hotter in the future? Various data indicate that this year is likely your coolest summer, because every year in the future will only be hotter.",
    ],
    link: "https://www.businessweekly.com.tw/focus/blog/3012839",
  },
  {
    title: "How Does Adding ‘AI’ to a Job Title Boost Salary? Insights from 1,000 Openings",
    publication: "Business Weekly",
    date: "April 17, 2023",
    authors: "Sammy Liu",
    thumbnail: "assets/AIsalary00.jpeg",
    process:["Following ChatGPT's launch,I scraped 995 AI job postings from Indeed using Python to analyze how AI was reshaping the job market. I found that adding \"AI\" to job titles increased average salaries by $75,000, with AI consultants earning 221% more than regular consultants. Despite only 3 postings, prompt engineers commanded the highest median salaries. I designed visualizations showing job distribution, salary patterns, and the compensation premium for AI-prefixed roles."],
    description: [
      "ChatGPT's launch raised the question: has the job market truly experienced the major upheaval we've been anxious about? What new AI-linked positions have emerged? Do AI-enhanced job openings really deliver salary windfalls?",
      "We searched America's largest job site, Indeed, for \"AI jobs\" nationwide and analyzed 995 AI position datasets to map out the real landscape of the AI job market.",
      {heading: "Engineers, AI Researchers, and Data Scientists Account for 60% of Openings"},
      "Job titles and excluded unidentifiable positions allowed us to categorize nearly 1,000 job openings into 17 major occupational categories.",
      { image: "assets/AIsalary01.png"},
      "Our results show \"AI/Machine Learning Engineers\" dominate AI recruitment, representing 27.3% of all positions. However, similar job titles mask significant variation—examining actual job descriptions reveals different companies' \"AI/Machine Learning Engineer\" roles require vastly different skills.",
      "Some positions span data processing, model architecture, software development, and systems engineering—essentially combining data analyst, algorithm engineer, software engineer, and systems engineer roles.",
      "Other companies offer \"AI/Machine Learning Engineer\" positions with job responsibilities nearly identical to traditional software engineers.",
      "Vertical sectors like image recognition, voice recognition, biomedical, and e-commerce aggressively seek AI integration as they develop. \"AI/Machine Learning Engineer\" positions remain most numerous but demand the highest qualifications: master's or doctoral degrees, proficiency in multiple programming languages, and at least 3-5 years of work experience. AI researchers rank second at 18.8%, and data scientists rank third at 13.4%. These top 3 position types account for nearly 60% of the entire AI job market.",
      {heading: "New AI Roles That Don't Require Coding Remain Scarce"},
      "<strong>1. prompt engineer</strong>",
      "ChatGPT delivers impressive capabilities, but many experts warn that AI often produces low-quality responses without proper \"training,\" misleading users. Prompt engineers must master \"asking the right questions\" and \"giving proper instructions\" as their most critical skills. Prompt engineers don't need mastery of multiple programming languages compared to AI engineers, but understanding large language model architecture and basic programming skills remain fundamental requirements. However, few companies currently pay engineers just to \"talk\"—only 3 such positions exist.",
      "<strong>2. data annotation specialist</strong>",
      "AI training relies on massive datasets. Data annotation specialists tag images, multilingual text, audio, video, and other materials, providing labeled data for AI training to improve accuracy in data recognition and response quality. This work remains essential for advancing artificial intelligence development.",
      "Some people call data annotation specialists the \"blue-collar workers of the AI era.\" Their relatively low salaries reflect lower technical barriers to entry.",
      "<strong>3. AI ethic</strong>",
      "AI helps solve many problems, but algorithmic bias, data misuse, and privacy violations represent major emerging issues. AI ethics consultants monitor and investigate consumer-facing products and models, identify potential user concerns, and develop comprehensive product and AI privacy policies to protect user rights. These positions require different academic backgrounds depending on companies' ethical scope, encompassing public policy and privacy regulations.",
      {heading: "Salary Breakdown: Highest-Paid Position Isn't an Engineer"},
      "Median job salaries reveal \"Prompt Engineers\" currently offer salaries far exceeding other categories' median compensation, despite limited openings.",
      "Data annotation specialists and AI content writers occupy the salary rankings' bottom. \"AI Sales Specialists\" show the widest salary range among all positions disclosing salaries. AI sales representatives generally earn modest salaries, but a small group clusters around $260,000 annually (approximately NT$7.9 million), even exceeding prompt engineer compensation.",
      "Our dataset of nearly 1,000 job listings shows the highest-paid position isn't an engineer or data scientist, but Intel's Amazon Sales & Marketing Group VP Account Director.",
      {image: "assets/AIsalary02.png"},
      { heading: "AI Makes a Huge Difference. Salary Peaks Differ by $100,000"},
      "AI-related positions reveal many familiar job titles simply carry \"AI\" prefixes: AI sales representatives, AI project managers, AI content writers, etc.",
      "Integrating AI into our workflow involves costs, but what tangible added value can we expect after mastering these skills? We compared these AI-prefixed new positions against traditional roles without AI designation.",
      { image: "assets/AIsalary03.png"},
      "The chart demonstrates virtually all job titles show significant salary increases after adding AI. Average annual salaries rise comprehensively by approximately $75,000, while salary peaks average over $100,000 higher. \"AI Consultants\" show the largest gap, earning 221% more than regular \"Consultants.\" \"AI Researchers\" follow, earning 166% more than \"Other Researchers.\"",
      { heading: "No Clear Trend of STEM Workers Being Replaced—AI Impact Remains Ongoing"},
      "Indeed's AI-related job listings show current workforce demand still concentrates on training models, algorithms, and testing application possibilities across various fields—stages focused on advancing AI technology development.",
      "Programmer replacement or massive liberal arts job creation isn't yet visible, but one certainty emerges: integrating AI into respective specialties is already happening. We all still have time to develop our AI capabilities before workplace reshuffling truly arrives.",
    ],
    link: "https://www.businessweekly.com.tw/business/blog/3012111",
  },
];

// ── Helpers ───────────────────────────────────────────────────────────────────
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// ── Build grid ────────────────────────────────────────────────────────────────
const grid = document.getElementById("clips-grid");

clips.forEach((clip, index) => {
  const card = document.createElement("div");
  card.className = "clip-card";
  card.setAttribute("tabindex", "0");
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `Open article: ${clip.title}`);

  const imgHtml = clip.thumbnail
    ? `<img class="clip-thumbnail" src="${escapeHtml(clip.thumbnail)}" alt="" loading="lazy">`
    : `<div class="clip-thumbnail-placeholder" aria-hidden="true"></div>`;

  card.innerHTML = `
    ${imgHtml}
    <div class="clip-info">
      <div class="clip-title">${escapeHtml(clip.title)}</div>
      <div class="clip-byline">
        <span class="pub-name">${escapeHtml(clip.publication)}</span>, ${escapeHtml(clip.date)}
      </div>
    </div>
  `;

  card.addEventListener("click", () => openModal(index));
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openModal(index);
    }
  });

  grid.appendChild(card);
});

// ── Modal logic ───────────────────────────────────────────────────────────────
const overlay    = document.getElementById("modal-overlay");
const modalClose = document.getElementById("modal-close");
const modalTitle = document.getElementById("modal-title");
const modalMeta  = document.getElementById("modal-meta");
const modalAuthors = document.getElementById("modal-authors");
const modalBody  = document.getElementById("modal-body");
const modalImages = document.getElementById("modal-images");
const modalProcess = document.getElementById("modal-process");
const modalLink  = document.getElementById("modal-link");

let lastFocused = null;

function openModal(index) {
  const clip = clips[index];

  lastFocused = document.activeElement;

  modalTitle.textContent = clip.title;
  modalMeta.textContent = `${clip.publication} · ${clip.date}`;
  modalAuthors.textContent = `By ${clip.authors}`;

  modalBody.innerHTML = clip.description
    .map((item) => {
      if (typeof item === "string") {
        return `<p>${escapeHtml(item)}</p>`;
      }
      if (item.heading) {
        return `<h3 class="modal-heading">${escapeHtml(item.heading)}</h3>`;
      }
      // multi-image grid: { images: ["path1", "path2", ...] }
      if (item.images) {
        const imgs = item.images
          .map((src) => `<img src="${escapeHtml(src)}" alt="" loading="lazy">`)
          .join("");
        return `<div class="modal-figure-grid">${imgs}</div>`;
      }
      // single image: { image: "assets/photo.jpg", caption: "optional caption" }
      return `
        <figure class="modal-figure">
          <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.caption || "")}" loading="lazy">
          ${item.caption ? `<figcaption>${escapeHtml(item.caption)}</figcaption>` : ""}
        </figure>
      `;
    })
    .join("");

  modalImages.innerHTML = "";

  if (clip.process && clip.process.length) {
    modalProcess.innerHTML = `
      <p class="modal-process-label">Behind the story</p>
      ${clip.process.map((p) => `<p>${escapeHtml(p)}</p>`).join("")}
    `;
    modalProcess.style.display = "block";
  } else {
    modalProcess.innerHTML = "";
    modalProcess.style.display = "none";
  }

  if (clip.link) {
    modalLink.href = clip.link;
    modalLink.style.display = "inline-block";
  } else {
    modalLink.style.display = "none";
  }

  overlay.classList.add("open");
  overlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  // Focus close button after animation settles
  setTimeout(() => modalClose.focus(), 50);
}

function closeModal() {
  overlay.classList.remove("open");
  overlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";

  if (lastFocused) {
    lastFocused.focus();
    lastFocused = null;
  }
}

modalClose.addEventListener("click", closeModal);

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && overlay.classList.contains("open")) {
    closeModal();
  }
});
