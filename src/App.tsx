import './index.css'
import portrait from './assets/tudose.png'
import teachingOne from './assets/carousel/picture1.jpg'
import teachingTwo from './assets/carousel/picture3.jpg'
import teachingThree from './assets/carousel/picture5.jpg'

type ResearchArea = {
  title: string
  description: string
}

type Publication = {
  year: string
  title: string
  authors: string
  journal: string
  doi: string
  firstAuthor?: boolean
}

type TimelineItem = {
  title: string
  date: string
  location?: string
  meta?: string
  description?: string
  bullets?: string[]
}

type Conference = {
  title: string
  date: string
  location?: string
  bullets?: string[]
}

const navItems = [
  { label: 'Profile', href: '#profile' },
  { label: 'Publications', href: '#publications' },
  { label: 'Awards', href: '#awards' },
  { label: 'Service', href: '#service' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

const researchAreas: ResearchArea[] = [
  {
    title: 'Head and neck anatomical variation',
    description:
      'Imaging-based and evidence-synthesis work on clinically relevant variants of the craniofacial region, skull base, cervical vessels, oral cavity, and maxillofacial anatomy.',
  },
  {
    title: 'CBCT, CT, and CTA morphometry',
    description:
      'Quantitative anatomy using DICOM datasets, multiplanar reconstructions, 3D volume rendering, segmentation, and reproducible measurement protocols.',
  },
  {
    title: 'Vascular and skull-base anatomy',
    description:
      'Focused work on vertebral, carotid, jugular, emissary, and extracranial vascular variants with relevance to surgical access, procedural planning, and radiological interpretation.',
  },
  {
    title: 'Evidence synthesis and anatomical education',
    description:
      'Systematic reviews, meta-analyses, critical narrative reviews, and educational projects integrating imaging, 3D anatomy, scientific writing, and AI-assisted learning workflows.',
  },
]

const education: TimelineItem[] = [
  {
    title: 'Dental Student Exchange Programme',
    date: '20 Aug 2023 – 6 Sep 2023',
    location: 'Faculty of Dentistry, Niigata University, Niigata, Japan',
    meta: '60 credit hours',
    description:
      'Clinical observerships, theoretical lectures, and research seminars, supported by the Japan Student Services Organization (JASSO) Student Exchange Support Programme scholarship.',
  },
]

const cpd: TimelineItem[] = [
  {
    title: 'Tech-Review: Academic Writing Summer Camp for Young Researchers',
    date: '1 Jul 2025 – 1 Sep 2025',
    location: 'Bucharest, Romania',
  },
  {
    title: 'The Use of Artificial Intelligence in Scientific Writing',
    date: '1 May 2025 – 20 Jul 2025',
    location: 'Carol Davila University of Medicine and Pharmacy, Bucharest, Romania',
    description:
      'Professional training in digital competencies, delivered within the Digital Training Center for Minimally Invasive and Interventional Treatment.',
  },
]

const awards: TimelineItem[] = [
  {
    title: 'Research Scholarship, Principal Investigator',
    date: '25 Oct 2024 – 25 Oct 2025',
    meta: 'Johnson & Johnson · Intrinsic Anatomical Variations of the Petrous Bone · 12 months · EUR 200/month',
    description:
      'Two peer-reviewed publications produced under this funding in Annals of Anatomy: a CBCT analysis of geniculate ganglion fossa pneumatisation and dehiscence (DOI: 10.1016/j.aanat.2025.152402) and pneumatisation patterns surrounding the internal acoustic meatus (DOI: 10.1016/j.aanat.2025.152724).',
  },
  {
    title: 'Diploma of Excellence',
    date: '26 May 2024',
    meta: 'Medical Directorate, Ministry of National Defence, Romania',
    description: 'In high recognition of distinguished military merit.',
  },
  {
    title: 'Best Poster Paper Award',
    date: '16 Sep 2023',
    meta: 'European Association of Clinical Anatomy & International Symposium of Clinical and Applied Anatomy, Prague, Czech Republic',
    description: 'Poster: Overlaid thyroid cartilage by an atavistic hyoid bone.',
  },
  {
    title: 'Student Exchange Scholarship',
    date: '21 Aug 2023',
    meta: 'Japan Student Services Organization · Academic Year 2023–2024 · Niigata University, Japan',
  },
  {
    title: '1st Place, Scientific Presentations, Preclinical Section',
    date: '1 Apr 2023',
    meta: "Dental Medicine Students' League, Bucharest, Romania",
    description: 'Oral presentation: The Zygomatic Implant — An anatomical view of the potential risks.',
  },
  {
    title: '1st Place, Young Investigator Award',
    date: '10 Nov 2022',
    meta: 'Carol Davila University of Medicine and Pharmacy, Bucharest',
    description: 'Oral presentation: CBCT assessment of the greater palatine canal.',
  },
  {
    title: 'Merit Scholarship',
    date: '2021 – Current',
    meta: 'Carol Davila University of Medicine and Pharmacy, Bucharest',
  },
]

const publications: Publication[] = [
  {
    year: '2026',
    title: 'The Buccal Fat Pad: An Accessible Craniofacial Stem Cell Niche with Emerging Regenerative Applications',
    authors: 'Rusu MC, Varga I, Tudose RC, Vrapciu AD, Vintilă B, Hostiuc S',
    journal: 'Stem Cell Reviews and Reports. 22(4):2015–2018.',
    doi: '10.1007/s12015-026-11062-3',
  },
  {
    year: '2026',
    title: 'External Facial Width as a Surrogate for Posterior Mandibular Canal Position: A CBCT-Based Morphometric Study',
    authors: 'Ben Kheder CF, Tudose RC, Rusu MC',
    journal: 'Journal of Craniofacial Surgery. Online ahead of print.',
    doi: '10.1097/SCS.0000000000012772',
  },
  {
    year: '2026',
    title: 'Anatomical variability of the lingual artery: a comprehensive narrative review with clinical and surgical applications',
    authors: 'Dincă V, Calotă RN, Hostiuc S, Tudose RC, Varga I, Rusu MC',
    journal: 'Surgical and Radiologic Anatomy. 48(1).',
    doi: '10.1007/s00276-026-03846-6',
  },
  {
    year: '2026',
    title: 'The persistent proatlantal artery: types and subtypes',
    authors: 'Rusu MC, Tudose RC, Vrapciu AD',
    journal: 'Surgical and Radiologic Anatomy. 48(1).',
    doi: '10.1007/s00276-026-03880-4',
  },
  {
    year: '2026',
    title: 'Surgical Anatomy of the Greater Palatine Canal: A Cone-Beam CT-Based Framework for Posterior Maxillary Interventions',
    authors: 'Tudose RC, Rusu MC',
    journal: 'Journal of Craniofacial Surgery. Online ahead of print.',
    doi: '10.1097/SCS.0000000000012716',
    firstAuthor: true,
  },
  {
    year: '2026',
    title: 'Cone beam computed tomography assessment of lateral pterygoid plate morphology',
    authors: 'Dandoczi CA, Tudose RC, Rusu MC',
    journal: 'Annals of Anatomy. 265:152809.',
    doi: '10.1016/j.aanat.2026.152809',
  },
  {
    year: '2026',
    title: 'Fenestrated giant mastoid emissary vein, a novel finding',
    authors: 'Rusu MC, Tudose RC, Vrapciu AD',
    journal: 'Surgical and Radiologic Anatomy. 48(1).',
    doi: '10.1007/s00276-026-03869-z',
  },
  {
    year: '2026',
    title: 'Distinguishing true from pseudo-absent styloid process: a case-prompted critical analysis',
    authors: 'Rusu MC, Zamfirescu VI, Tudose RC',
    journal: 'Surgical and Radiologic Anatomy. 48(1).',
    doi: '10.1007/s00276-026-03842-w',
  },
  {
    year: '2026',
    title: 'A critical reappraisal of the carotid sinus and carotid bulb: Distinguishing neurohistological function from vascular geometry',
    authors: 'Tudose RC, Radu N, Rusu MC',
    journal: 'The Anatomical Record. Online ahead of print.',
    doi: '10.1002/ar.70149',
    firstAuthor: true,
  },
  {
    year: '2026',
    title: 'Global prevalence of high jugular bulb and jugular bulb dehiscence: a systematic review and meta-analysis',
    authors: 'Tudose RC, Rusu MC',
    journal: 'Anatomical Science International. Online ahead of print.',
    doi: '10.1007/s12565-026-00919-9',
    firstAuthor: true,
  },
  {
    year: '2026',
    title: 'Bilateral aberrant buccal arteries, hypoplastic facial arteries, and a fenestrated maxillary artery',
    authors: 'Rusu MC, Toader C, Rădoi PM, Tudose RC',
    journal: 'Anatomy & Cell Biology. Online ahead of print.',
    doi: '10.5115/acb.25.355',
  },
  {
    year: '2026',
    title: 'External Carotid Artery Position Relative to the Greater Horn of the Hyoid: A Comprehensive Bilateral Analysis of Anatomical Variations',
    authors: 'Dincă V, Calotă RN, Rusu MI, Tudose RC, Dumitru CC, Rusu MC',
    journal: 'Cureus. 18(1):e101903.',
    doi: '10.7759/cureus.101903',
  },
  {
    year: '2026',
    title: 'A systematic review with meta-analysis of the olfactory fossa anatomy: Implications for anterior skull base approaches',
    authors: 'Triantafyllou G, Alzir I, Karangeli N, Papadopoulos-Manolarakis P, Valenzuela-Fuenzalida JJ, Tudose RC, Rusu MC, Samolis A, Piagkou M',
    journal: 'Neurosurgical Review. 49(1):128.',
    doi: '10.1007/s10143-025-04059-y',
  },
  {
    year: '2025',
    title: 'Right Renal Vein Fenestration: A Novel Anatomical Variant',
    authors: 'Rusu MC, Damen NS, Tudose RC, Jianu AM',
    journal: 'Cureus. 17(10):e95756.',
    doi: '10.7759/cureus.95756',
  },
  {
    year: '2025',
    title: 'Double ascending pharyngeal artery: the first evidence',
    authors: 'Calotă RN, Tudose RC, Rusu MC',
    journal: 'Anatomical Science International. Online ahead of print.',
    doi: '10.1007/s12565-025-00902-w',
  },
  {
    year: '2025',
    title: 'The lingual-facial-ascending pharyngeal trunk',
    authors: 'Triantafyllou G, Papadopoulos-Manolarakis P, Tudose RC, Rusu MC, Tsakotos G, Piagkou M',
    journal: 'Surgical and Radiologic Anatomy. 47(1):225.',
    doi: '10.1007/s00276-025-03721-w',
  },
  {
    year: '2025',
    title: 'Fenestrated carotid axis at the carotid bifurcation and long inferior petrosal sinus, novel findings',
    authors: 'Rusu MC, Dincă V, Tudose RC',
    journal: 'Surgical and Radiologic Anatomy. 47(1):218.',
    doi: '10.1007/s00276-025-03730-9',
  },
  {
    year: '2025',
    title: 'Anatomical Reasons for an Impaired Internal Jugular Flow',
    authors: 'Dincă V, Ionescu P, Tudose RC, Munteanu M, Vrapciu AD, Rusu MC',
    journal: 'Medicina. 61(9):1627.',
    doi: '10.3390/medicina61091627',
  },
  {
    year: '2025',
    title: 'Pneumatisation patterns surrounding the internal acoustic meatus',
    authors: 'Tudose RC, Triantafyllou G, Piagkou M, Rusu MC',
    journal: 'Annals of Anatomy. 263:152724.',
    doi: '10.1016/j.aanat.2025.152724',
    firstAuthor: true,
  },
  {
    year: '2025',
    title: 'A juxta-ethmoidal course of the infraorbital canal in cases with large ethmomaxillary sinuses or giant Haller cells',
    authors: 'Rusu MC, Vrapciu AD, Tudose RC',
    journal: 'Anatomy & Cell Biology. 58(4):647–651.',
    doi: '10.5115/acb.25.144',
  },
  {
    year: '2025',
    title: 'Prevalence of variants in gonadal vessels: a systematic review with meta-analysis',
    authors: 'Paschopoulos I, Triantafyllou G, Ediaroglou V, Arkadopoulos N, Tudose RC, Rusu MC, Tsakotos G, Valenzuela-Fuenzalida JJ, Piagkou M',
    journal: 'Anatomy & Cell Biology. 58(4):561–569.',
    doi: '10.5115/acb.25.161',
  },
  {
    year: '2025',
    title: 'The Retropharyngeal Internal Carotid Artery: A Systematic Review, Meta-Analysis of the Current Literature, and Evidence Sampling',
    authors: 'Tudose RC, Stan AD, Vrapciu AD, Munteanu IM, Dumitru CC, Triantafyllou G, Piagkou M, Rusu MC',
    journal: 'Clinical Anatomy. Online ahead of print.',
    doi: '10.1002/ca.70072',
    firstAuthor: true,
  },
  {
    year: '2025',
    title: 'Origin Variants of the Ascending Pharyngeal Artery and Sequential External Carotid Branching Classification',
    authors: 'Calotă RN, Vrapciu AD, Hostiuc S, Rusu MI, Tudose RC, Tudosie MS, Triantafyllou G, Piagkou M, Rusu MC',
    journal: 'Diagnostics. 15(24).',
    doi: '10.3390/diagnostics15243106',
  },
  {
    year: '2025',
    title: 'Anatomical Prevalence and Surgical Implications of the Ossified Pterygospinous and Pterygoalar Ligaments: A Systematic Review with Meta-Analysis',
    authors: 'Piagkou M, Gondorf D, Triantafyllou G, Karangeli N, Papadopoulos-Manolarakis P, Tudose RC, Rusu MC, Samolis A, Valenzuela-Fuenzalida JJ, Sanchis-Gimeno J, Konschake M',
    journal: 'World Neurosurgery. 204:124549.',
    doi: '10.1016/j.wneu.2025.124549',
  },
  {
    year: '2025',
    title: 'Anatomy, Imaging, and Clinical Significance of the Cervicothoracic (Stellate) Ganglion',
    authors: 'Rusu MC, Munteanu IM, Vrapciu AD, Jianu AM, Hostiuc S, Tudose RC, Motoc AGM',
    journal: 'Diagnostics. 15(22).',
    doi: '10.3390/diagnostics15222911',
  },
  {
    year: '2025',
    title: 'Prevalence of suboccipital and intradural vertebral artery variants: a systematic review with meta-analysis',
    authors: 'Triantafyllou G, Papadopoulos-Manolarakis P, Tudose RC, Rusu MC, Tsakotos G, Piagkou M',
    journal: 'Neuroradiology. 67(8):1985–1995.',
    doi: '10.1007/s00234-025-03674-2',
  },
  {
    year: '2025',
    title: "A condylar imprint of Farabeuf's knocker and associated cervical variants",
    authors: 'Rusu MC, Tudose RC',
    journal: 'Anatomical Science International. Online ahead of print.',
    doi: '10.1007/s12565-025-00870-1',
  },
  {
    year: '2025',
    title: 'The Sensory Gatekeeper of the Larynx: Anatomy and Clinical Importance of the Internal Branch of the Superior Laryngeal Nerve',
    authors: 'Vrapciu AD, Brezean I, Tudose RC, Rusu MC, Triantafyllou G, Piagkou M',
    journal: 'Diagnostics. 15(13):1711.',
    doi: '10.3390/diagnostics15131711',
  },
  {
    year: '2025',
    title: 'Detailed Anatomy of a Pterygomandibular Ankylosis',
    authors: 'Rusu MC, Toader C, Tudose RC',
    journal: 'Journal of Craniofacial Surgery. Online ahead of print.',
    doi: '10.1097/SCS.0000000000011618',
  },
  {
    year: '2025',
    title: 'The parapharyngeal vein — an accessory communication between the middle cerebral veins and the internal jugular vein: a case report',
    authors: 'Rusu MC, Tudose RC, Vrapciu AD',
    journal: 'Surgical and Radiologic Anatomy. 47(1):162.',
    doi: '10.1007/s00276-025-03676-y',
  },
  {
    year: '2025',
    title: 'A novel perspective on geniculate ganglion fossa: Cone beam computed tomography analysis of pneumatization and dehiscence',
    authors: 'Tudose RC, Rusu MC',
    journal: 'Annals of Anatomy. 260:152402.',
    doi: '10.1016/j.aanat.2025.152402',
    firstAuthor: true,
  },
  {
    year: '2025',
    title: 'Foramen ovale morphology and relationship with the lateral pterygoid process plate: proposal for a new classification system',
    authors: 'Triantafyllou G, Papadopoulos-Manolarakis P, Luzzi S, Olewnik Ł, Tsakotos G, Zielinska N, Galzio R, Tudose RC, Rusu MC, Piagkou M',
    journal: 'Anatomical Science International. 100(3):354–365.',
    doi: '10.1007/s12565-025-00826-5',
  },
  {
    year: '2025',
    title: 'The Connection Between Canine Fossa Topography and Facial Morphology',
    authors: 'Dandoczi CA, Rusu MC, Tudose RC',
    journal: 'Dentistry Journal. 13(6):229.',
    doi: '10.3390/dj13060229',
  },
  {
    year: '2025',
    title: 'The Potential Morphological Stenosis Pattern of the Arcuate Foramen',
    authors: 'Paschopoulos I, Piagkou M, Triantafyllou G, Papadopoulos-Manolarakis P, Duparc F, Demetriou F, Tsakotos G, Tudose RC, Rusu MC, Toader OD',
    journal: 'Diagnostics. 15(10):1203.',
    doi: '10.3390/diagnostics15101203',
  },
  {
    year: '2025',
    title: 'Aberrant courses of the occipital artery',
    authors: 'Rusu MC, Dumitru CC, Tudose RC',
    journal: 'Surgical and Radiologic Anatomy. 47(1):135.',
    doi: '10.1007/s00276-025-03650-8',
  },
  {
    year: '2025',
    title: 'Retropharyngeal course of the superior thyroid artery — a novel finding',
    authors: 'Calotă RN, Rusu MC, Dumitru CC, Moraru L, Tudose RC',
    journal: 'Surgical and Radiologic Anatomy. 47(1):115.',
    doi: '10.1007/s00276-025-03627-7',
  },
  {
    year: '2025',
    title: 'Details of rare and novel anatomical variations in a case with bilateral long styloid processes',
    authors: 'Rusu MC, Tudose RC, Vrapciu AD, Butucescu M',
    journal: 'Romanian Journal of Morphology and Embryology. 66(2):399–403.',
    doi: '10.47162/RJME.66.2.14',
  },
  {
    year: '2025',
    title: 'Mastoid pouch of the sigmoid sinus — an extraordinary anatomical variant',
    authors: 'Rusu MC, Toader C, Tudose RC',
    journal: 'Surgical and Radiologic Anatomy. 47(1):79.',
    doi: '10.1007/s00276-025-03590-3',
  },
  {
    year: '2025',
    title: "Beyond two heads: An imaging-based analysis of the lateral pterygoid muscle's heads",
    authors: 'Albu AC, Tudose RC, Vrapciu AD, Rusu MC',
    journal: 'Annals of Anatomy. 259:152387.',
    doi: '10.1016/j.aanat.2025.152387',
  },
  {
    year: '2025',
    title: 'Discriminating between the maxillary tuberosity and the alveolar tuberosity — a critical pictorial review',
    authors: 'Dandoczi CA, Rusu MC, Mureșan AN, Tudose RC',
    journal: 'Surgical and Radiologic Anatomy. 47(1):60.',
    doi: '10.1007/s00276-025-03569-0',
  },
  {
    year: '2025',
    title: 'The transoccipital parasigmoid canal of the vertebral artery through a vestige of the occipital vertebra',
    authors: 'Rusu MC, Toader C, Tudose RC',
    journal: 'Surgical and Radiologic Anatomy. 47(1):58.',
    doi: '10.1007/s00276-025-03568-1',
  },
  {
    year: '2025',
    title: 'A case of occipital artery originating from the vertebral artery',
    authors: 'Tudose RC, Toader C, Rusu MC',
    journal: 'Anatomy & Cell Biology. 58(1):122–126.',
    doi: '10.5115/acb.24.257',
    firstAuthor: true,
  },
  {
    year: '2025',
    title: 'Long linguofacial trunk with infrahyoid origin',
    authors: 'Tudose RC, Rusu MC, Toader C, Rădoi PM',
    journal: 'Anatomy & Cell Biology. 58(1):127–131.',
    doi: '10.5115/acb.24.171',
    firstAuthor: true,
  },
  {
    year: '2024',
    title: 'A new anatomical finding: the paramastoid diverticulum of the sigmoid sinus',
    authors: 'Rusu MC, Toader C, Tudose RC',
    journal: 'Surgical and Radiologic Anatomy. 47(1):47.',
    doi: '10.1007/s00276-024-03558-9',
  },
  {
    year: '2024',
    title: 'The Occipital Recess of the Sphenoidal Sinus — A Novel Anatomical Possibility',
    authors: 'Rusu MC, Toader C, Tudose RC, Grigoriță LO',
    journal: 'Journal of Craniofacial Surgery. 36(4):e384–e387.',
    doi: '10.1097/SCS.0000000000010875',
  },
  {
    year: '2024',
    title: 'When the Jugular Bulb Contacts the Facial Nerve',
    authors: 'Rusu MC, Toader C, Tudose RC, Grigoriță LO',
    journal: 'Journal of Craniofacial Surgery. 36(3):992–994.',
    doi: '10.1097/SCS.0000000000010820',
  },
  {
    year: '2024',
    title: 'Debate on the Morphological Variability of the Lateral Pterygoid Muscle — Discrepancies, Speculations and New Original Anatomical Samples',
    authors: 'Rusu MC, Toader C, Tudose RC, Grigoriță LO',
    journal: 'Medicina. 60(12):1913.',
    doi: '10.3390/medicina60121913',
  },
  {
    year: '2024',
    title: "The lingual and facial arteries' common origin: a systematic review with meta-analysis and a computed tomography angiography study",
    authors: 'Triantafyllou G, Vassiou K, Duparc F, Vlychou M, Paschopoulos I, Tsakotos G, Tudose RC, Rusu MC, Piagkou M',
    journal: 'Surgical and Radiologic Anatomy. 46(12):1937–1947.',
    doi: '10.1007/s00276-024-03490-y',
  },
  {
    year: '2024',
    title: 'Anatomical Variations of the Jugular Bulb: A Critical and Comprehensive Review',
    authors: 'Tudose RC, Rusu MC, Triantafyllou G, Piagkou M, Toader C, Rădoi PM',
    journal: 'Medicina. 60(9):1408.',
    doi: '10.3390/medicina60091408',
    firstAuthor: true,
  },
  {
    year: '2024',
    title: 'The coexistence of the internal jugular vein duplication with a contralateral internal jugular drainage of the external jugular vein',
    authors: 'Triantafyllou G, Vassiou K, Vlychou M, Tsakotos G, Tudose RC, Rusu MC, Piagkou M',
    journal: 'Translational Research in Anatomy. 37:100326.',
    doi: '10.1016/j.tria.2024.100326',
  },
  {
    year: '2024',
    title: 'Fenestration of the anterior and posterior cerebral arteries in coexistence with a contralateral posterior cerebral artery of fetal origin',
    authors: 'Triantafyllou G, Uchino A, Vassiou K, Tudose RC, Rusu MC, Vlychou M, Tsakotos G, Piagkou M',
    journal: 'Surgical and Radiologic Anatomy. 46(8):1363–1366.',
    doi: '10.1007/s00276-024-03428-4',
  },
  {
    year: '2024',
    title: 'The vertical topography of the carotid bifurcation — original study and review',
    authors: 'Manta MD, Rusu MC, Hostiuc S, Tudose RC, Manta BA, Jianu AM',
    journal: 'Surgical and Radiologic Anatomy. 46(8):1253–1263.',
    doi: '10.1007/s00276-024-03404-y',
  },
  {
    year: '2024',
    title: 'Jugular bulb anatomical variations and pneumatization patterns: a comprehensive CBCT analysis',
    authors: 'Tudose RC, Rusu MC, Triantafyllou G, Piagkou M, Moraru L, Dumitru CC',
    journal: 'Surgical and Radiologic Anatomy. 46(7):1001–1013.',
    doi: '10.1007/s00276-024-03401-1',
    firstAuthor: true,
  },
  {
    year: '2024',
    title: 'Anatomical Possibilities of the Alveolar Bone at the Upper Second Premolar Level',
    authors: 'Mureșan AN, Dandoczi CA, Tudose RC, Hostiuc S, Rusu MC',
    journal: 'Medicina. 60(5):726.',
    doi: '10.3390/medicina60050726',
  },
  {
    year: '2024',
    title: 'A Bilateral Symmetrical Variant Formation of the Sural Nerve',
    authors: 'Tsakotos G, Triantafyllou G, Koutserimpas C, Rusu MC, Tudose R, Piagkou M',
    journal: 'Cureus. 16(3):e56801.',
    doi: '10.7759/cureus.56801',
  },
  {
    year: '2024',
    title: 'Systematic Review and Meta-analysis of Suprascapular Notch Morphological Variability: Do We Know Everything?',
    authors: 'Tsakotos G, Tudose RC, Triantafyllou G, Koutserimpas C, Rusu MC, Flevas D, Piagkou M',
    journal: 'Cureus. 16(3):e55852.',
    doi: '10.7759/cureus.55852',
  },
  {
    year: '2024',
    title: 'The anterior communicating artery variants: a meta-analysis with a proposed classification system',
    authors: 'Triantafyllou G, Tudose RC, Tsiouris C, Tsakotos G, Loukas M, Tubbs RS, Kalamatianos T, Chrissicopoulos C, Al-Nasraoui K, Koutserimpas C, Rusu MC, Natsis K, Kotrotsios A, Piagkou M',
    journal: 'Surgical and Radiologic Anatomy. 46(5):697–716.',
    doi: '10.1007/s00276-024-03336-7',
  },
  {
    year: '2024',
    title: 'Lowered hyoid bone overlapping the thyroid cartilage in CT angiograms',
    authors: 'Rusu MC, Tudose RC, Vrapciu AD, Popescu ȘA',
    journal: 'Surgical and Radiologic Anatomy. 46(3):333–339.',
    doi: '10.1007/s00276-024-03300-5',
  },
  {
    year: '2023',
    title: 'The Vertebral Artery: A Systematic Review and a Meta-Analysis of the Current Literature',
    authors: 'Tudose RC, Rusu MC, Hostiuc S',
    journal: 'Diagnostics. 13(12):2036.',
    doi: '10.3390/diagnostics13122036',
    firstAuthor: true,
  },
  {
    year: '2023',
    title: 'Anatomical Variations of the External Jugular Vein: A Pictorial and Critical Review',
    authors: 'Rusu MC, Tudose RC, Vrapciu AD, Toader C, Popescu ȘA',
    journal: 'Medicina. 59(3):622.',
    doi: '10.3390/medicina59030622',
  },
]

const peerReview = [
  'Surgical and Radiologic Anatomy — 20 completed reviews',
  'Annals of Anatomy — 11 completed reviews',
  'Bratislava Medical Journal — 4 completed reviews',
  'Ultrasound in Medicine and Biology — 3 completed reviews',
  'BMC Medical Imaging — 2 completed reviews',
  'The Anatomical Record — 1 completed review',
  'Journal of Cardiothoracic Surgery — 1 completed review',
  'Neurosurgical Review',
  'World Journal of Surgical Oncology',
]

const conferences: Conference[] = [
  {
    title: '27th Congress of the Balkan Military Medical Committee',
    date: '30 Mar 2026 – 2 Apr 2026',
    bullets: ['Attendance and participation.'],
  },
  {
    title: 'XXIX International Symposium on Morphological Sciences',
    date: '23 Jul 2025 – 26 Jul 2025',
    location: 'Lisbon, Portugal',
    bullets: ['Poster: Rare jugular and carotid anatomical variants associated with elongated styloid processes — a case report.'],
  },
  {
    title: 'International Congress for Students, Young Doctors and Pharmacists “Marisiensis”, 29th Edition',
    date: '21 May 2025 – 25 May 2025',
    location: 'Târgu Mureș, Romania',
    bullets: [
      'Oral presentation, Military Medicine section: Biomechanical analysis of mandibular fracture susceptibility in military personnel.',
      'Oral presentation, co-author, Dentistry, Preclinical Section: A CT angiography study of the ascending pharyngeal artery origin.',
      'Oral presentation, co-author, Dentistry, Preclinical Section: Anatomical variations of the deep cervical vein — a pilot CT angiographic study.',
      'Oral presentation, co-author, Dentistry, Preclinical Section: Anatomical variables for the jugular nutcracker syndrome.',
    ],
  },
  {
    title: '31st Scientific Congress of Hellenic Medical Students',
    date: '11 Apr 2025 – 13 Apr 2025',
    location: 'Thessaloniki, Greece',
    bullets: ['Poster: New perspectives on the geniculate ganglion fossa — pneumatization and dehiscence.'],
  },
  {
    title: 'OSMDentis National Scientific Symposium, 10th Edition',
    date: '20 Nov 2024 – 23 Nov 2024',
    location: 'Târgu Mureș, Romania',
  },
  {
    title: 'International Congress for Students, Young Doctors and Pharmacists “Marisiensis”, 28th Edition',
    date: '22 May 2024 – 26 May 2024',
    location: 'Târgu Mureș, Romania',
    bullets: [
      'Oral presentation, Military Medicine section: CBCT in Combat — Pioneering Anatomical Strategies for Maxillofacial Rehabilitation.',
      'Poster, Military Medicine section: Quantifying Condyle Displacement in an Isolated Mandibular Fracture — A CBCT-Based Case Report.',
    ],
  },
  {
    title: 'Dent-X Congress, 4th Edition',
    date: '25 Mar 2024 – 31 Mar 2024',
    location: 'Bucharest, Romania',
    bullets: ['Oral presentation, co-author, Preclinical Section: Beyond two heads — an imaging-based analysis of the lateral pterygoid muscle heads.'],
  },
  {
    title: 'OSMDentis National Scientific Symposium, 9th Edition',
    date: '22 Nov 2023 – 25 Nov 2023',
    location: 'Târgu Mureș, Romania',
  },
  {
    title: 'EACA–ISCAA Joint International Congress of Clinical and Applied Anatomy',
    date: '14 Sep 2023 – 17 Sep 2023',
    location: 'Prague, Czech Republic',
    bullets: ['Poster: Overlaid thyroid cartilage by an atavistic hyoid bone. Best Poster Award.'],
  },
  {
    title: 'Dent-X Congress, 3rd Edition',
    date: '27 Mar 2023 – 2 Apr 2023',
    location: 'Bucharest, Romania',
    bullets: ['Oral presentation: The Zygomatic Implant — An anatomical view of the potential risks. 1st Place, Preclinical Section.'],
  },
  {
    title: 'Congress of Carol Davila University of Medicine and Pharmacy, 10th Edition',
    date: '10 Nov 2022 – 12 Nov 2022',
    location: 'Bucharest, Romania',
    bullets: ['Oral presentation: CBCT assessment of the greater palatine canal. 1st Place, Young Investigator Award.'],
  },
]

const skills = [
  {
    title: 'Imaging analysis',
    text: 'CBCT, CT, CTA, and MRI interpretation; DICOM post-processing; Horos for multiplanar reconstruction, segmentation, 3D volume rendering, and quantitative morphometry; cross-sectional imaging for craniofacial and skull-base anatomy.',
  },
  {
    title: 'Statistical analysis',
    text: 'R; random-effects meta-analytic methods, including DerSimonian–Laird, generalized linear mixed models with cluster-robust variance, meta-regression, Welch t-test, Fisher exact and McNemar tests, Clopper–Pearson confidence intervals, Pearson and Spearman correlation, multivariable and logistic regression, sensitivity analyses, and subgroup analyses.',
  },
  {
    title: 'Figure production and design',
    text: 'Adobe Illustrator, Photoshop, and InDesign; vector SVG; high-resolution TIFF at 350–500 DPI; PRISMA flowcharts, forest and funnel plots, sensitivity plots, graphical abstracts, schematic neurovascular diagrams, and original anatomical illustrations for teaching and publication.',
  },
  {
    title: 'Manuscript workflow',
    text: 'EndNote reference management in Vancouver, AMA, and other styles; end-to-end revision cycles with point-by-point reviewer responses; pre-submission checklists; structured cover letters; manuscript editing in Microsoft Word.',
  },
  {
    title: 'Other digital tools',
    text: 'Microsoft Word, Excel, PowerPoint; Google Workspace; Zoom; AI-assisted scientific writing tools.',
  },
]

const languageSkills = [
  'Romanian — mother tongue',
  'English — C1',
  'Italian — B2',
  'Arabic — B2; used in teaching dental cohorts predominantly from Arabic-speaking countries',
]

const teachingImages = [
  { src: teachingOne, title: 'CBCT anatomy visualization' },
  { src: teachingTwo, title: 'Craniofacial 3D rendering' },
  { src: teachingThree, title: 'Greater palatine canal topography' },
]

const groupedPublications = publications.reduce<Record<string, Publication[]>>((acc, publication) => {
  acc[publication.year] = acc[publication.year] || []
  acc[publication.year].push(publication)
  return acc
}, {})

function SectionHeading({ eyebrow, title, text, align = 'center' }: { eyebrow: string; title: string; text?: string; align?: 'center' | 'left' }) {
  return (
    <div className={align === 'center' ? 'mx-auto mb-10 max-w-3xl text-center' : 'mb-10 max-w-3xl'}>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">{title}</h2>
      {text ? <p className="mt-5 text-lg leading-8 text-slate-600">{text}</p> : null}
    </div>
  )
}

function TimelineCard({ item }: { item: TimelineItem }) {
  return (
    <article className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{item.date}</p>
      <h3 className="mt-3 text-2xl font-bold text-slate-950">{item.title}</h3>
      {item.location ? <p className="mt-2 text-sm font-semibold text-cyan-700">{item.location}</p> : null}
      {item.meta ? <p className="mt-2 text-sm font-semibold text-slate-600">{item.meta}</p> : null}
      {item.description ? <p className="mt-4 text-base leading-7 text-slate-600">{item.description}</p> : null}
      {item.bullets ? (
        <ul className="mt-4 space-y-2 text-base leading-7 text-slate-600">
          {item.bullets.map((bullet) => (
            <li key={bullet}>• {bullet}</li>
          ))}
        </ul>
      ) : null}
    </article>
  )
}

function App() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#top" className="text-sm font-bold uppercase tracking-[0.25em] text-slate-900">
            RCT
          </a>
          <div className="hidden items-center gap-6 text-sm font-medium text-slate-600 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-slate-950">
                {item.label}
              </a>
            ))}
          </div>
          <a
            href="mailto:razvan-costin.tudose0721@stud.umfcd.ro"
            className="rounded-full bg-slate-950 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800"
          >
            Email
          </a>
        </nav>
      </header>

      <section id="top" className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.12),transparent_30%)]" />
        <div className="relative mx-auto grid min-h-[86vh] max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-[1.1fr_0.9fr] md:px-8">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">
              Anatomy · Imaging · Evidence synthesis
            </p>
            <h1 className="max-w-4xl text-5xl font-black tracking-tight text-slate-950 md:text-7xl">
              Răzvan Costin Tudose
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-9 text-slate-700">
              Dental student and anatomy researcher focused on head and neck anatomical variation, CBCT/CTA morphometry, skull-base anatomy, vascular anatomy, and clinically oriented anatomical evidence synthesis.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-4xl font-black text-slate-950">60</p>
                <p className="mt-1 text-sm font-semibold text-slate-600">peer-reviewed publications</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-4xl font-black text-slate-950">11</p>
                <p className="mt-1 text-sm font-semibold text-slate-600">first-author papers</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-4xl font-black text-slate-950">42+</p>
                <p className="mt-1 text-sm font-semibold text-slate-600">completed peer reviews</p>
              </div>
            </div>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#publications"
                className="rounded-full bg-slate-950 px-7 py-3 text-center font-semibold text-white shadow-lg shadow-slate-300 transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                View publications
              </a>
              <a
                href="#awards"
                className="rounded-full border border-slate-300 bg-white px-7 py-3 text-center font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:border-slate-950"
              >
                Awards and scholarships
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-slate-200" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-300/60">
              <img src={portrait} alt="Răzvan Costin Tudose" className="mx-auto h-72 w-72 rounded-[2rem] object-cover md:h-80 md:w-80" />
              <div className="mt-6 rounded-3xl bg-slate-950 p-6 text-white">
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Research focus</p>
                <p className="mt-3 text-2xl font-bold leading-snug">Clinically relevant anatomy through high-resolution imaging and rigorous synthesis.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="profile" className="px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Research profile"
            title="A focused portfolio in anatomical variation and imaging-based morphometry"
            text="The site now presents the work as a coherent academic profile rather than a simple student webpage. The structure highlights research direction, outputs, service, and technical competence."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {researchAreas.map((area) => (
              <article key={area.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200">
                <h3 className="text-2xl font-bold text-slate-950">{area.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-600">{area.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Education and professional development"
              title="International exposure and continuing training"
              text="Exchange, scientific writing, and AI-related professional development are integrated as supporting evidence for the research profile."
              align="left"
            />
          </div>
          <div className="grid gap-5">
            {education.map((item) => (
              <TimelineCard key={item.title} item={item} />
            ))}
            {cpd.map((item) => (
              <TimelineCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section id="awards" className="px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Recognition" title="Honours, awards, and scholarships" />
          <div className="grid gap-5 md:grid-cols-2">
            {awards.map((award) => (
              <TimelineCard key={award.title} item={award} />
            ))}
          </div>
        </div>
      </section>

      <section id="publications" className="bg-slate-950 px-5 py-24 text-white md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Bibliometric summary</p>
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">Publications</h2>
            </div>
            <p className="text-lg leading-8 text-slate-300">
              Sixty peer-reviewed publications since 2022, including eleven first-author papers. Bibliometric data retrieved from PubMed on 11 May 2026; Scopus, Web of Science, and Google Scholar profiles are available through the identifiers listed in the academic header. Up-to-date citation metrics are available on the linked profiles.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 text-slate-300">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">Full list</p>
            <p className="mt-3 text-base leading-7">Peer-reviewed publications are listed in reverse chronological order. First-author papers are flagged; DOI links open the publisher record.</p>
          </div>

          <div className="mt-10 space-y-12">
            {Object.entries(groupedPublications).map(([year, items]) => (
              <section key={year}>
                <div className="mb-5 flex items-center gap-4">
                  <h3 className="text-4xl font-black text-white">{year}</h3>
                  <div className="h-px flex-1 bg-white/15" />
                  <span className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-slate-300">{items.length} papers</span>
                </div>
                <div className="grid gap-4">
                  {items.map((publication) => (
                    <a
                      key={`${publication.year}-${publication.title}`}
                      href={`https://doi.org/${publication.doi}`}
                      target="_blank"
                      rel="noreferrer"
                      className="group rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-white/[0.08]"
                    >
                      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                        <div>
                          <div className="mb-3 flex flex-wrap gap-2">
                            {publication.firstAuthor ? <span className="rounded-full bg-cyan-300 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-slate-950">First author</span> : null}
                            <span className="rounded-full border border-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">DOI: {publication.doi}</span>
                          </div>
                          <h4 className="text-xl font-bold leading-snug text-white">{publication.title}</h4>
                          <p className="mt-3 text-sm leading-6 text-slate-300">{publication.authors}</p>
                          <p className="mt-2 text-sm font-semibold text-slate-400">{publication.journal}</p>
                        </div>
                        <span className="shrink-0 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition group-hover:border-cyan-300/60">
                          DOI →
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section id="service" className="px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Peer review and editorial service"
            title="Active reviewer for international journals"
            text="The service section supports the profile as an emerging researcher already participating in the peer-review ecosystem."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {peerReview.map((review) => (
              <div key={review} className="rounded-3xl border border-slate-200 bg-white p-6 text-base font-semibold leading-7 text-slate-800 shadow-sm">
                {review}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Conference presentations" title="Scientific meetings and presentations" />
          <div className="space-y-5">
            {conferences.map((conference) => (
              <article key={conference.title} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-950">{conference.title}</h3>
                    {conference.location ? <p className="mt-2 text-sm font-semibold text-cyan-700">{conference.location}</p> : null}
                  </div>
                  <p className="shrink-0 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">{conference.date}</p>
                </div>
                {conference.bullets ? (
                  <ul className="mt-4 space-y-2 text-base leading-7 text-slate-600">
                    {conference.bullets.map((bullet) => (
                      <li key={bullet}>• {bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Technical profile" title="Research and technical skills" />
          <div className="grid gap-5 md:grid-cols-2">
            {skills.map((skill) => (
              <article key={skill.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-950">{skill.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-600">{skill.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-950">Language skills</h3>
              <ul className="mt-4 space-y-2 text-base leading-7 text-slate-600">
                {languageSkills.map((language) => (
                  <li key={language}>• {language}</li>
                ))}
              </ul>
            </article>
            <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-950">Professional membership</h3>
              <p className="mt-4 text-base leading-7 text-slate-600">AMSUS — The Society of Federal Health Professionals, Member.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="teaching" className="bg-white px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Teaching and visualization"
            title="Imaging anatomy as an educational tool"
            text="CBCT, 3D rendering, and annotated anatomical reconstructions give the site a distinctive visual identity while remaining academically serious."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {teachingImages.map((image) => (
              <figure key={image.title} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
                <img src={image.src} alt={image.title} className="h-72 w-full object-cover" />
                <figcaption className="p-5 text-base font-semibold text-slate-800">{image.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-950 px-5 py-24 text-white md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Contact</p>
          <h2 className="text-4xl font-black tracking-tight md:text-6xl">Academic correspondence</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            For research collaboration, academic correspondence, lectures, manuscript-related communication, or conference invitations, contact me by email.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="mailto:razvan-costin.tudose0721@stud.umfcd.ro"
              className="rounded-full bg-white px-7 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5"
            >
              razvan-costin.tudose0721@stud.umfcd.ro
            </a>
            <a
              href="https://pubmed.ncbi.nlm.nih.gov/?term=Tudose+RC"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-7 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/50"
            >
              PubMed profile search
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-5 py-8 text-center text-sm font-medium text-slate-500 md:px-8">
        © 2026 Răzvan Costin Tudose. All rights reserved.
      </footer>
    </main>
  )
}

export default App
