$(document).ready(function(){

  var minGrantees = 999;
  var maxGrantees = 0;

  var stateData = {
    usa1: { name: 'Alabama', grantees: ['chcs', 'cafp', 'cadca', 'facadd', 'fract', 'fin', 'gih', 'lac', 'mgr', 'nas', 'norc', 'phope', 'abamf', 'csjksu', 'tyr', 'tah', 'uisap'] },
    usa2: { name: 'Alaska', grantees: ['chcs', 'cafp', 'cadca', 'facadd', 'fract', 'fin', 'gih', 'lac', 'mgr', 'nas', 'phope', 'abamf', 'csjksu', 'tyr', 'tah', 'uisap'] },
    usa3: { name: 'Arizona', grantees: ['chcs', 'cafp', 'cadca', 'facadd', 'fract', 'fin', 'gih', 'lac', 'mgr', 'nas', 'norc', 'phope', 'abamf', 'csjksu', 'tyr', 'tah', 'uisap'] },
    usa4: { name: 'Arkansas', grantees: ['chcs', 'cafp', 'cadca', 'facadd', 'fract', 'fin', 'gih', 'lac', 'mgr', 'nas', 'phope', 'abamf', 'csjksu', 'tyr', 'tah', 'uisap'] },
    usa5: { name: 'California', grantees: ['chcs', 'cafp', 'ccf', 'cadca', 'facadd', 'fract', 'fin', 'gih', 'kfri', 'lac', 'mgr', 'nas', 'ncbh', 'norc', 'phope', 'sbha', 'abamf', 'csjksu', 'tyr', 'tah', 'uisap', 'uom', 'ybu'] },
    usa6: { name: 'Colorado', grantees: ['chcs', 'cafp', 'csi', 'cadca', 'facadd', 'fract', 'fin', 'gih', 'lac', 'mgr', 'nas', 'ncbh', 'pdfk', 'phope', 'abamf', 'csjksu', 'tyr', 'tah', 'uisap'] },
    usa7: { name: 'Connecticut', grantees: ['aap', 'chcs', 'cafp', 'cadca', 'facadd', 'fract', 'fin', 'gih', 'lac', 'mgr', 'nas', 'pri', 'phope', 'abamf', 'csjksu', 'tyr', 'tah', 'uisap'] },
    usa8: { name: 'Delaware', grantees: ['chcs', 'cafp', 'cadca', 'facadd', 'fract', 'fin', 'gih', 'lac', 'mgr', 'nas', 'phope', 'abamf', 'csjksu', 'tyr', 'tah', 'uisap'] },
    usa9: { name: 'Florida', grantees: ['chcs', 'cafp', 'cadca', 'facadd', 'fract', 'fin', 'gih', 'lac', 'mgr', 'nas', 'phope', 'abamf', 'csjksu', 'tyr', 'tah', 'uisap'] },
    usa10: { name: 'Georgia', grantees: ['aap', 'chcs', 'cafp', 'csi', 'cdcf', 'cadca', 'ccat', 'facadd', 'fract', 'fin', 'gih', 'lac', 'mgr', 'nas', 'phope', 'abamf', 'csjksu', 'tyr', 'tah', 'uisap'] },
    usa11: { name: 'Hawaii', grantees: ['chcs', 'cafp', 'cadca', 'facadd', 'fract', 'fin', 'gih', 'lac', 'mgr', 'nas', 'phope', 'abamf', 'csjksu', 'tyr', 'tah', 'uisap'] },
    usa12: { name: 'Idaho', grantees: ['chcs', 'cafp', 'cadca', 'facadd', 'fract', 'fin', 'gih', 'lac', 'mgr', 'nas', 'norc', 'phope', 'abamf', 'csjksu', 'tyr', 'tah', 'uisap'] },
    usa13: { name: 'Illinois', grantees: ['aap', 'chcs', 'cafp', 'cadca', 'facadd', 'fract', 'fin', 'gih', 'lac', 'mgr', 'nas', 'norc', 'phope', 'sbha', 'abamf', 'csjksu', 'tyr', 'tah', 'uisap', 'ybu'] },
    usa14: { name: 'Indiana', grantees: ['chcs', 'cafp', 'cdcf', 'cadca', 'facadd', 'fract', 'fin', 'gih', 'lac', 'mgr', 'nas', 'phope', 'abamf', 'csjksu', 'tyr', 'tah', 'uisap'] },
    usa15: { name: 'Iowa', grantees: ['chcs', 'cafp', 'cadca', 'facadd', 'fract', 'fin', 'gih', 'lac', 'mgr', 'nas', 'phope', 'abamf', 'csjksu', 'tyr', 'tah', 'uisap'] },
    usa16: { name: 'Kansas', grantees: ['chcs', 'cafp', 'cadca', 'facadd', 'fract', 'fin', 'gih', 'lac', 'mgr', 'nas', 'ncbh', 'phope', 'abamf', 'csjksu', 'tyr', 'tah', 'uisap', 'ybu'] },
    usa17: { name: 'Kentucky', grantees: ['chcs', 'cafp', 'cdcf', 'cadca', 'facadd', 'fract', 'fin', 'gih', 'lac', 'mgr', 'nas', 'phope', 'abamf', 'csjksu', 'tyr', 'tah', 'uisap', 'ybu'] },
    usa18: { name: 'Louisiana', grantees: ['chcs', 'cafp', 'cadca', 'facadd', 'fract', 'fin', 'gih', 'lac', 'mgr', 'nas', 'pri', 'phope', 'abamf', 'csjksu', 'tyr', 'tah', 'uisap', 'ybu'] },
    usa19: { name: 'Maine', grantees: ['chcs', 'cafp', 'cadca', 'facadd', 'fract', 'fin', 'gih', 'lac', 'mgr', 'nas', 'phope', 'abamf', 'csjksu', 'tyr', 'tah', 'uisap'] },
    usa20: { name: 'Maryland', grantees: ['bhsb', 'chcs', 'cafp', 'cadca', 'facadd', 'fract', 'fin', 'gih', 'lac', 'mgr', 'nas', 'norc', 'phope', 'sbha', 'abamf', 'csjksu', 'tyr', 'tah', 'uisap'] },
    usa21: { name: 'Massachusetts', grantees: ['chcs', 'chc', 'cafp', 'csi', 'cadca', 'ccat', 'facadd', 'fract', 'fin', 'gih', 'lac', 'mgr', 'nas', 'phope', 'abamf', 'csjksu', 'tyr', 'tah', 'uisap', 'ybu'] },
    usa22: { name: 'Michigan', grantees: ['chcs', 'cafp', 'cadca', 'facadd', 'fract', 'fin', 'gih', 'lac', 'mgr', 'nas', 'norc', 'phope', 'abamf', 'csjksu', 'tyr', 'tah', 'uisap'] },
    usa23: { name: 'Minnesota', grantees: ['chcs', 'cafp', 'cadca', 'facadd', 'fract', 'fin', 'gih', 'lac', 'mgr', 'nas', 'phope', 'abamf', 'csjksu', 'tyr', 'tah', 'uisap', 'uom', 'ybu'] },
    usa24: { name: 'Mississippi', grantees: ['chcs', 'cafp', 'cadca', 'facadd', 'fract', 'fin', 'gih', 'lac', 'mgr', 'nas', 'norc', 'phope', 'abamf', 'csjksu', 'tyr', 'tah', 'uisap', 'ybu'] },
    usa25: { name: 'Missouri', grantees: ['chcs', 'cafp', 'cadca', 'facadd', 'fract', 'fin', 'gih', 'lac', 'mgr', 'nas', 'norc', 'phope', 'abamf', 'csjksu', 'tyr', 'tah', 'uisap', 'ybu'] },
    usa26: { name: 'Montana', grantees: ['chcs', 'cafp', 'cadca', 'facadd', 'fract', 'fin', 'gih', 'lac', 'mgr', 'nas', 'phope', 'abamf', 'csjksu', 'tyr', 'tah', 'uisap'] },
    usa27: { name: 'Nebraska', grantees: ['chcs', 'cafp', 'cadca', 'facadd', 'fract', 'fin', 'gih', 'lac', 'mgr', 'nas', 'phope', 'abamf', 'csjksu', 'tyr', 'tah', 'uisap'] },
    usa28: { name: 'Nevada', grantees: ['chcs', 'cafp', 'cadca', 'facadd', 'fract', 'fin', 'gih', 'lac', 'mgr', 'nas', 'phope', 'abamf', 'csjksu', 'tyr', 'tah', 'uisap', 'ybu'] },
    usa29: { name: 'New Hampshire', grantees: ['chcs', 'cafp', 'cadca', 'facadd', 'fract', 'fin', 'gih', 'lac', 'mgr', 'nas', 'nhcf', 'pdfk', 'phope', 'abamf', 'csjksu', 'tyr', 'tah', 'uisap'] },
    usa30: { name: 'New Jersey', grantees: ['chcs', 'cafp', 'cadca', 'ccat', 'facadd', 'fract', 'fin', 'gih', 'lac', 'mgr', 'nas', 'norc', 'pdfk', 'phope', 'abamf', 'csjksu', 'tyr', 'tah', 'uisap', 'ybu'] },
    usa31: { name: 'New Mexico', grantees: ['chcs', 'cafp', 'cadca', 'facadd', 'fract', 'fin', 'gih', 'lac', 'mgr', 'nas', 'phope', 'sbha', 'abamf', 'csjksu', 'tyr', 'tah', 'uisap', 'uonm', 'ybu'] },
    usa32: { name: 'New York', grantees: ['chcs', 'cafp', 'cadca', 'facadd', 'fract', 'fin', 'gih', 'lac', 'mfu', 'mgr', 'nas', 'ncbh', 'pdfk', 'pri', 'psurf', 'phope', 'abamf', 'csjksu', 'tyr', 'tri', 'tah', 'uisap', 'ybu'] },
    usa33: { name: 'North Carolina', grantees: ['chcs', 'cafp', 'cadca', 'facadd', 'fract', 'fin', 'gih', 'lac', 'mgr', 'nas', 'psurf', 'phope', 'abamf', 'csjksu', 'tyr', 'tah', 'uisap'] },
    usa34: { name: 'North Dakota', grantees: ['chcs', 'cafp', 'cadca', 'facadd', 'fract', 'fin', 'gih', 'lac', 'mgr', 'nas', 'phope', 'abamf', 'csjksu', 'tyr', 'tah', 'uisap'] },
    usa35: { name: 'Ohio', grantees: ['chcs', 'cafp', 'csi', 'cdcf', 'cadca', 'ccat', 'facadd', 'fract', 'fin', 'gih', 'lac', 'mgr', 'nas', 'osu', 'pri', 'phope', 'abamf', 'csjksu', 'tyr', 'tah', 'uisap', 'ybu'] },
    usa36: { name: 'Oklahoma', grantees: ['chcs', 'cafp', 'cadca', 'facadd', 'fract', 'fin', 'gih', 'lac', 'mgr', 'nas', 'phope', 'abamf', 'csjksu', 'tyr', 'tah', 'uisap'] },
    usa37: { name: 'Oregon', grantees: ['chcs', 'cafp', 'cadca', 'facadd', 'fract', 'fin', 'gih', 'lac', 'mgr', 'nas', 'psurf', 'phope', 'sbha', 'abamf', 'csjksu', 'tyr', 'tah', 'uisap'] },
    usa38: { name: 'Pennsylvania', grantees: ['chcs', 'cafp', 'csi', 'cadca', 'facadd', 'fract', 'fin', 'gih', 'lac', 'mgr', 'nas', 'norc', 'phope', 'abamf', 'csjksu', 'tyr', 'tah', 'uisap', 'ybu'] },
    usa39: { name: 'Rhode Island', grantees: ['chcs', 'cafp', 'cadca', 'facadd', 'fract', 'fin', 'gih', 'lac', 'mgr', 'nas', 'ncbh', 'phope', 'abamf', 'csjksu', 'tyr', 'tah', 'uisap'] },
    usa40: { name: 'South Carolina', grantees: ['chcs', 'cafp', 'csi', 'cadca', 'facadd', 'fract', 'fin', 'gih', 'lac', 'mgr', 'nas', 'phope', 'abamf', 'csjksu', 'tyr', 'tah', 'uisap', 'ybu'] },
    usa41: { name: 'South Dakota', grantees: ['chcs', 'cafp', 'cadca', 'facadd', 'fract', 'fin', 'gih', 'lac', 'mgr', 'nas', 'phope', 'abamf', 'csjksu', 'tyr', 'tah', 'uisap'] },
    usa42: { name: 'Tennessee', grantees: ['chcs', 'cafp', 'cadca', 'facadd', 'fract', 'fin', 'gih', 'lac', 'mgr', 'nas', 'ncbh', 'norc', 'phope', 'abamf', 'csjksu', 'tyr', 'tah', 'uisap'] },
    usa43: { name: 'Texas', grantees: ['chcs', 'cafp', 'cadca', 'facadd', 'fract', 'fin', 'gih', 'lac', 'mgr', 'nas', 'phope', 'abamf', 'csjksu', 'tyr', 'tah', 'uisap', 'ybu'] },
    usa44: { name: 'Utah', grantees: ['aap', 'chcs', 'cafp', 'cadca', 'facadd', 'fract', 'fin', 'gih', 'lac', 'mgr', 'nas', 'phope', 'abamf', 'csjksu', 'tyr', 'tah', 'uisap'] },
    usa45: { name: 'Vermont', grantees: ['chcs', 'cafp', 'cadca', 'facadd', 'fract', 'fin', 'gih', 'lac', 'mgr', 'nas', 'nhcf', 'psurf', 'phope', 'abamf', 'csjksu', 'tyr', 'tah', 'uisap'] },
    usa46: { name: 'Virginia', grantees: ['chcs', 'cafp', 'cadca', 'facadd', 'fract', 'fin', 'gih', 'lac', 'mgr', 'nas', 'phope', 'abamf', 'csjksu', 'tyr', 'tah', 'uisap', 'ybu'] },
    usa47: { name: 'Washington', grantees: ['chcs', 'cafp', 'cadca', 'facadd', 'fract', 'fin', 'gih', 'lac', 'mgr', 'nas', 'psurf', 'phope', 'abamf', 'csjksu', 'tyr', 'tah', 'uisap'] },
    usa48: { name: 'Washington DC', grantees: ['chcs', 'cafp', 'cadca', 'facadd', 'fract', 'fin', 'gih', 'lac', 'mgr', 'nas', 'ncbh', 'phope', 'sbha', 'abamf', 'csjksu', 'tyr', 'tah', 'uisap'] },
    usa49: { name: 'West Virginia', grantees: ['chcs', 'cafp', 'cadca', 'facadd', 'fract', 'fin', 'gih', 'lac', 'mgr', 'nas', 'norc', 'phope', 'abamf', 'csjksu', 'tyr', 'tah', 'uisap', 'ybu'] },
    usa50: { name: 'Wisconsin', grantees: ['chcs', 'cafp', 'cadca', 'ccat', 'facadd', 'fract', 'fin', 'gih', 'lac', 'mgr', 'nas', 'phope', 'abamf', 'csjksu', 'tyr', 'tah', 'uisap'] },
    usa51: { name: 'Wyoming', grantees: ['chcs', 'cafp', 'cadca', 'facadd', 'fract', 'fin', 'gih', 'lac', 'mgr', 'nas', 'phope', 'abamf', 'csjksu', 'tyr', 'tah', 'uisap'] },
    usa52: { name: 'Puerto Rico', grantees: ['chcs', 'cafp', 'cadca', 'facadd', 'fract', 'fin', 'gih', 'lac', 'mgr', 'nas', 'phope', 'abamf', 'csjksu', 'tyr', 'tah', 'uisap'] }
  }


  var granteeData = {
    aap: { coords: "1005,440", name: "American Academy of Pediatrics", timeline: "10/1/2014 - 9/30/2018", description: "AAP is increasing utilization of SBIRT among pediatric providers serving adolescents. Key components include a learning collaborative to design and implement best practices, including quality measures, and development of an EQIPP® (Education in Quality Improvement and Pediatric Practice) module, which is an online tool to train pediatric practitioners."},
    bhsb: { coords: "1310,490", name: "Behavioral Health System Baltimore", timeline: "11/1/2015 - 12/31/2017", description: "BHSB is leading a multi-jurisdictional, multi-partner initiative to integrate adolescent SBIRT into pediatric primary settings and school-based health centers across Maryland." },
    cafp: { coords: "250,650", name: "California Academy of Family Physicians", timeline: "9/1/15 - 8/31/18", description: "CAFP will increase practitioner awareness, competence, and confidence in identifying and addressing youth substance use, including alcohol and other drugs through partners from five national primary care associations that serve family physicians, nurse practitioners, physician assistants, general internists, and pediatricians." },
    ccf: { coords: "250,650", name: "California Community Foundation ", timeline: "Grant 1 - 8/1/14 - 9/1/15, Grant 2 - 3/1/16 -2/28/18", description: "CCF had an initial grant to lead a planning a process to explore the feasibility of implementing SBIRT for adolescents in Los Angeles County. In their second grant, they are implementing SBIRT in 4 schools in LA County." },
    csi: { coords: "1390,360", name: "Center for Social Innovation", timeline: "12/1/2014 - 12/31/2017", description: "C4 is partnering with researchers, practitioners, and young people in recovery from substance use disorders to determine how peer-based interventions can be effective at motivating change and promoting healthy choices for adolescents." },
    cdcf: { coords: "1100,800", name: "CDC Foundation", timeline: "01/01/16 - 12/31/218", description: "CDC will conduct a comprehensive, regional substance use prevention and sexual risk behavior reduction program for communities with high substance use and/or HIV/STD rates among youth.  Their school-centered approach will focus on four major activities: substance use and HIV prevention education, access to key health services, promotion of safe and supportive school and community climates, and monitoring and evaluation." },
    chcs: { coords: "780,700", name: "Center for Health Care Strategies", timeline: "Grant 1: 4/1/15 - 3/31/16, Grant 2: 1/1/16-12/31/18", description: "Grant 1: CHCS  convened a small group consultation (SGC), to facilitate the identification of opportunities for and challenges to the implementation of a publicly financed primary care approach to the prevention of and early intervention for youth substance use disorders. Grant 2: CHCS and ACAP will conduct a learning collaborative to support a target of five participating plans in developing and implementing a PCP training program on the use of SBIRT." },
    chc: { coords: "280,700", name: "Children’s Hospital Corp", timeline: "12/1/14 - 11/30/18", description: "CHC is conducting a research study to develop a set of outcome measures for real-world clinical settings to assess the short term impact of SBIRT. The research is testing the efficacy of SBIRT and the measures for a particularly vulnerable group: youth with chronic medical conditions." },
    cadca: { coords: "780,700", name: "Community Anti-Drug Coalitions of America", timeline: "7/1/15 - 6/30/16", description: "CADCA will create a planning process to develop, pilot, and evaluate an approach to provide training and technical assistance to community coalitions to support the development and implementation of SBIRT in their communities." },
    ccat: { coords: "280,700", name: "Community Catalyst", timeline: "12/1/13 - 11/30/16", description: "CC is developing consumer-led advocacy campaigns in six states (GA, MA, NY, NJ, OH, WI) to enact state policy change to increase access to SBIRT by improving reimbursement and expanding the settings/professionals that can provide it, with a focus on peer approaches." },
    facadd: { coords: "780,700", name: "Facing Addiction", timeline: "4/1/16  - 3/31/18", description: "Facing Addiction will build and organize a grassroots advocacy movement of those affected by addiction to advance public health responses, including Screening, Brief Intervention, and Referral to Treatment (SBIRT)." },
    fract: { coords: "280,700", name: "Fractured Atlas", timeline: "10/1/14 - 9/30/15", description: "Fractured Atlas is producing and conducting community discussion forums for Generation Found, a documentary film project about adolescents in recovery and the pediatric nature of the onset of addiction." },
    fin: { coords: "780,700", name: "Frameworks Institute", timeline: "1/1/15 - 4/30/16", description: "FrameWorks will explore how to effectively communicate with the members of the public, practitioners, and policymakers about youth substance use and what it takes to improve outcomes for young people." },
    gih: { coords: "280,700", name: "Grantmakers in Health", timeline: "8/1/15 - 7/31/16", description: "GIH will convene behavioral health funders, with a particular emphasis on SUD, as part of the GIH Fall Forum in Washington, DC to illuminate philanthropy’s current assets, gaps, and barriers to scaling behavioral health efforts as well as opportunities for partnering with different sectors and government." },
    kfri: { coords: "780,700", name: "Kaiser Foundation Research Institute", timeline: "2/1/2016 - 1/31/2019", description: "KP will develop predictive statistical models - “risk profiles” - of clinical and demographic characteristics which can be used by health systems and other youth-serving organizations to identify children and adolescents at greatest risk of developing substance use problems, for targeted prevention and early intervention efforts, including SBIRT." },
    lac: { coords: "280,700", name: "Legal Action Center ", timeline: "12/1/14 - 11/30/17", description: "LAC is analyzing the implementation of the Affordable Care Act and the Mental Health Parity and Addiction Equity Act, identify opportunities to improve access to preventative services, and provide technical assistance to state agencies, insurers, and advocates to improve policy and practice to expand access to prevention services." },
    mfu: { coords: "780,700", name: "Mentor Foundation USA", timeline: "11/1/15 - 7/31/16", description: "Mentor Foundation USA will create an interactive “multi-media” version of their current Shattering the Myths model, called STM 2.0, that incorporates messages for prevention specifically designed to counteract the misinformation (myths) adolescents have about drugs and alcohol. Messages will be framed to promote the benefits of prevention behaviors." },
    mgr: { coords: "280,700", name: "Mosaic Group", timeline: "9/1/14 - 8/31/16", description: "Mosaic Group is developing an Adolescent SBIRT checklist to support effective implementation of SBIRT for Foundation grantees and is providing technical assistance to implement the checklist with three grantees (National Council, School Based Health Alliance, YouthBuild)." },
    nas: { coords: "780,700", name: "National Academy of Sciences", timeline: "7/1/15 - 6/30/17", description: "The National Academies will continue to coordinate the Forum on Promoting Children's Cognitive, Affective, and Behavioral Health (C-CAB Forum). The Forum will consist of scientists, practitioners, government officials, and staff from private foundations. The goal is to advance an agenda focused on implementation that promote the mental, emotional, and behavioral health of adolescents." },
    ncbh: { coords: "280,700", name: "National Council of Behavioral Health ", timeline: "4/1/2014 - 3/31/2017", description: "Grant 1 - The National Council will implement a project to pilot SBIRT in 30 CBHOs in five states. Utilizing a competitive application process, the National Council will identify the agencies who will work in partnership with their respective State Associations to implement their SBIRT projects and conduct advocacy to establish Medicaid reimbursement for SBIRT." },
    norc: { coords: "780,700", name: "National Opinion Research Council", timeline: "10/1/2014 - 9/30/2017", description: "NORC is developing an online interactive SBIRT curriculum for social work and nursing schools." },
    nhcf: { coords: "280,700", name: "New Hampshire Charitable Foundation", timeline: "1/1/2014 - 6/30/2017", description: " NHCF is expanding SBIRT for adolescents in New Hampshire in community health settings and advocate for state policy changes to sustain SBIRT financing." },
    osu: { coords: "780,700", name: "Ohio State University", timeline: "7/1/14 - 6/30/17", description: "OSU is helping to establish a national Higher Education Center on Alcohol and Drug Prevention and Recovery, to operate as an information dissemination center to promote SBIRT and other evidence-based strategies to address alcohol and other drug use on college campuses. They have developed ScreenU, a drug misuse screening software, being piloted on college campuses across the country." },
    pdfk: { coords: "280,700", name: "Partnership for Drug Free Kids", timeline: "7/1/14 - 6/30/16", description: "The Partnership is developing, piloting, and evaluating an approach to engage parents in SBIRT programs and build a national peer support network of parents to address adolescent substance use." },
    pri: { coords: "780,700", name: "Policy Research Inc.", timeline: "9/1/14 - 8/31/17", description: "PRI is partnering with the National Center for Mental Health and Juvenile Justice to develop and implement an SBIRT approach for youth involved in the juvenile justice system." },
    psurf: { coords: "280,700", name: "Portland State University - Reclaiming Futures", timeline: "9/1/2014 - 6/30/2018", description: "Reclaiming Futures is incorporating SBIRT into the model to expand early intervention and diversion opportunities for court-involved youth." },
    phope: { coords: "780,700", name: "Project Hope", timeline: "3/1/16 - 2/28/17", description: "Health Affairs will conduct a briefing to highlight the issues in the behavioral health journal and discuss how policymakers and other stakeholders can promote behavioral health, health policy, and health systems improvement. This briefing will be held in Washington, DC and will include key stakeholders, including members of Congress and the Administration—as well as other health and health care stakeholders." },
    sbha: { coords: "280,700", name: "School Based Health Alliance", ended: true, timeline: "6/1/2014 - 5/31/2016", description: "SBHA conducted a two-year pilot project to provide adolescent-specific SBIRT training and technical assistance to 10 school-based health clinics" },
    abamf: { coords: "780,700", name: "The American Board of Addiction Medicine Foundation", timeline: "11/1/13 - 10/31/16", description: " ABAM is establishing the National Center for Physician Training in Addiction Medicine, to educate and train physicians in addiction medicine and prevention/early intervention of adolescent substance use." },
    csjksu: { coords: "280,700", name: "The Center for Sustainable Journalism - Kennesaw State University ", timeline: "4/1/15 - 3/3/16", description: "KSURSF is supporting the Center for Sustainable Journalism to develop media and communication materials to increase awareness among funders, policymakers and practitioners about adolescent substance use prevention and foster care and how the strategic initiative goals can promote opportunities and reduce barriers for these young people." },
    tyr: { coords: "780,700", name: "Transforming Youth Recovery", timeline: "4/1/15 - 3/3/16", description: "TYR is conducting a strategic planning process to launch Facing Addiction by: 1) conducting a public awareness campaign to build a coalition of stakeholders; 2) developing a research-based marketing and fundraising plan to motivate giving using tailored messaging; and 3) creating a social media campaign." },
    tri: { coords: "280,700", name: "Treatment Research Institute", timeline: "1/1/14 - 8/31/17", description: "TRI is piloting an SBIRT approach in four New York City metro area schools utilizing a computerized screening protocol and tailored brief intervention." },
    tah: { coords: "780,700", name: "Trust for America’s Health", timeline: "10/1/14 - 9/30/15", description: "TFAH is conducting an expert convening to identify best practices and emerging models related to primary prevention and early intervention, and developing a set of indicators to serve as an agenda for advocates to pursue in their states." },
    uisap: { coords: "280,700", name: "UCLA Integrated Substance Abuse Programs", timeline: "9/1/15 - 8/31/18", description: "UCLA will provide training and technical assistance to grantees." },
    uom: { coords: "780,700", name: "University of Minnesota", timeline: "7/1/14 - 6/30/17", description: "UMN is partnering with Kaiser Permanente to conduct a randomized controlled study of a four-session intervention model for teens and parents  that has been adapted for adolescents referred from schools and pediatric settings. This project is also testing a group intervention format." },
    uonm: { coords: "1,1", name: "University of New Mexico", timeline: "9/1/2014 - 8/31/2017", description: "UNM’s Center on Alcoholism, Substance Abuse, and Addictions is implementing SBIRT in school-based health clinics throughout the state of New Mexico." },
    ybu: { coords: "780,700", name: "YouthBuild, USA", timeline: "4/1/2014 - 9/30/2017", description: " YouthBuild, USA is implementing an SBIRT model in community-based YouthBuild programs." }
  }

  // insert markers
  for (var key in granteeData) {
    $('#map-markers .cssmap-pins').append(
      '<li id="marker-' + key + '" class="cssmap-pin" data-cssmap-coords="' + granteeData[key]['coords'] + '" style="display:none;"> <div class="cssmap-tooltip-content">'+granteeData[key]['name'] +'</div> <a href="#' + key + ' " class="cssmap-marker"><img src="includes/pin.png" width="20" height="25" alt="pin"/></a>  </li>'
    );  
  }  


  // CSSMap;
  $("#map-usa").CSSMap({
    "size": 1450,
    "tooltips": "sticky",
    "responsive": "auto",
    "tapOnce": true,
    "onLoad": function(e){
      // unhide map (hiding prevents loading untidyness)
      jQuery("#map-usa").show();

      // determine min/max grantees
      for (var stateKey in stateData) {
        // loop grantees in each state
        countGrantees = stateData[stateKey].grantees.length;
        maxGrantees = (maxGrantees < countGrantees)? countGrantees : maxGrantees;
        minGrantees = (minGrantees > countGrantees)? countGrantees : minGrantees;
      }

      for (var stateKey in stateData) {
        // loop grantees in each state
        pct = (stateData[stateKey].grantees.length - minGrantees) / (maxGrantees - minGrantees)
        pct = Math.ceil(pct * 10);
        $( "." + stateKey + " .bg").addClass( 'opacity' + pct );
      }

    },
    "onClick": function(e){
      var stateCode = e[0].classList[0];
      var stateInfo = stateData[stateCode];
      $("#stateName").html(stateInfo['name']);
      
      var granteesUl = '';
      for (var i = 0, len = stateInfo.grantees.length; i < len; i++) {
        for (var key in granteeData) {
          if (stateInfo.grantees[i] == key) {
            granteesUl = granteesUl + '<li><a class="granteeLink" data-key="'+key+'" href="#' + key + '">' + granteeData[key]['name'] + '</a></li>';
          }
        }     
      }
      $("#stateGrantees").html(granteesUl);
      $("#stateInfo").show();


    },

    pins: {
      enable: true,
      pinsId: "#map-markers",
      mapSize: 1450,
      markerPosition: "middle",
      tooltipPosition: "top",
      tooltipOnClick: false,
      clickableRegions: true,
    },

    "multipleClick": {
      "enable": false,
      "separator": "+",
      "hideSearchLink": true,
      "clicksLimit": 0
    }
  });
  // END OF THE CSSMap;

  function hashCheck() {
    var hashAttr = '';

    if(window.location.hash) {
      hashAttr = window.location.hash.replace(/[^a-z0-9]/gi, '');
    } 

    $("#granteeInfo").hide();
    $("#programInfo").show();

    // loop all grantees
    for (var key in granteeData) {
      // if found grantee, then pop its data into granteeInfo  
      if (hashAttr == key) {
        $("#granteeInfo .name").html(granteeData[key]['name']);
        $("#granteeInfo .timeline").html(granteeData[key]['timeline']);
        $("#granteeInfo .description").html(granteeData[key]['description']);
        $("#programInfo").hide();
        $("#granteeInfo").show();

        // update the marker to grantee's headquarters, then unhide it
        $('.cssmap-pin').hide();
        $('#marker-' + key).show();

        // highlight states that contain this grantee
        for (var stateKey in stateData) {
         
          // loop grantees in each state
          var foundIt = false;
          for (var i3 = 0, len3 = stateData[stateKey].grantees.length; i3 < len3; i3++) {
            if (stateData[stateKey].grantees[i3] == hashAttr) {
              foundIt = true
            }
          }

          if (foundIt) {
            $( "." + stateKey ).addClass( 'active-region' );
          }
          else {
            if ($( "." + stateKey ).hasClass( 'active-region' )) {
              $( "." + stateKey ).removeClass( 'active-region' );
            }
          }
        }   
      }
    }
  }

  window.onhashchange = hashCheck;

  /* add grantees to select */
  for (var key in granteeData) {
    $('#granteeSelect').append($('<option>', { 
        value: key,
        text : granteeData[key].name 
    }));
  }   


});

/** handle grantee select updates */
function granteeSelectChange(value) {
  window.location.hash = value;
}
