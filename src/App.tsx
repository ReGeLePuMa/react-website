import './index.css'
import portrait from './assets/tudose.png'
import teachingOne from './assets/carousel/picture1.jpg'
import teachingTwo from './assets/carousel/picture3.jpg'
import teachingThree from './assets/carousel/picture5.jpg'

type Publication = {
  title: string
  authors: string
  journal: string
  url: string
  tag: string
}

type Project = {
  title: string
  description: string
}

const navItems = [
  { label: 'Research', href: '#research' },
  { label: 'Publications', href: '#publications' },
  { label: 'Projects', href: '#projects' },
  { label: 'Teaching', href: '#teaching' },
  { label: 'Contact', href: '#contact' },
]

const researchAreas = [
  {
    title: 'Head and neck anatomical variation',
    description:
      'Focused anatomical work on clinically relevant variants of the craniofacial region, cervical vessels, skull base, and maxillofacial anatomy.',
  },
  {
    title: 'CBCT and CTA morphometry',
    description:
      'Quantitative imaging-based anatomy using CBCT, CTA, DICOM datasets, multiplanar reconstructions, 3D models, and reproducible measurement protocols.',
  },
  {
    title: 'Vascular anatomy and surgical relevance',
    description:
      'Studies on vertebral artery anatomy, extracranial vascular morphology, venous variants, and anatomy with implications for surgical access and procedural planning.',
  },
  {
    title: 'Evidence synthesis and anatomical education',
    description:
      'Systematic reviews, meta-analyses, narrative syntheses, and educational projects integrating imaging, 3D anatomy, and AI-assisted learning.',
  },
]

const publications: Publication[] = [
  {
    title: 'The Vertebral Artery: A Systematic Review and a Meta-Analysis of the Current Literature',
    authors: 'Tudose RC, Rusu MC, Hostiuc S',
    journal: 'Diagnostics, 2023',
    url: 'https://pubmed.ncbi.nlm.nih.gov/37370931/',
    tag: 'Systematic review and meta-analysis',
  },
  {
    title: 'Anatomical Variations of the External Jugular Vein: A Pictorial and Critical Review',
    authors: 'Rusu MC, Tudose RC, Vrapciu AD, Toader C, Popescu ŞA',
    journal: 'Medicina, 2023',
    url: 'https://pubmed.ncbi.nlm.nih.gov/36984623/',
    tag: 'Head and neck venous anatomy',
  },
  {
    title: 'The Anterior Communicating Artery Variants: A Meta-Analysis with a Proposed Classification System',
    authors:
      'Triantafyllou G, Tudose RC, Tsiouris C, Tsakotos G, Loukas M, Tubbs RS, Kalamatianos T, Chrissicopoulos C, Al-Nasraoui K, Koutserimpas C, Rusu MC, Natsis K, Kotrotsios A, Piagkou M',
    journal: 'Surgical and Radiologic Anatomy, 2024',
    url: 'https://pubmed.ncbi.nlm.nih.gov/38429407/',
    tag: 'Neurovascular anatomy',
  },
  {
    title: 'Lowered Hyoid Bone Overlapping the Thyroid Cartilage in CT Angiograms',
    authors: 'Rusu MC, Tudose RC, Vrapciu AD, Popescu ŞA',
    journal: 'Surgical and Radiologic Anatomy, 2024',
    url: 'https://pubmed.ncbi.nlm.nih.gov/38315210/',
    tag: 'CTA-based anatomy',
  },
  {
    title: 'Systematic Review and Meta-analysis of Suprascapular Notch Morphological Variability: Do We Know Everything?',
    authors: 'Tsakotos G, Tudose RC, Triantafyllou G, Koutserimpas C, Rusu MC, Flevas D, Piagkou M',
    journal: 'Cureus, 2024',
    url: 'https://pubmed.ncbi.nlm.nih.gov/38590476/',
    tag: 'Morphological variability',
  },
  {
    title: 'A Bilateral Symmetrical Variant Formation of the Sural Nerve',
    authors: 'Tsakotos G, Triantafyllou G, Koutserimpas C, Rusu MC, Tudose R, Piagkou M',
    journal: 'Cureus, 2024',
    url: 'https://pubmed.ncbi.nlm.nih.gov/38654810/',
    tag: 'Peripheral nerve variation',
  },
]

const projects: Project[] = [
  {
    title: 'V1 vertebral artery tortuosity and origin–entry mismatch',
    description:
      'CTA-based bilateral morphometry examining whether left-sided predominance of V1 tortuosity is better explained by origin-level variability and transverse-foraminal entry anatomy than by calibre-based dominance.',
  },
  {
    title: 'CBCT facial width and posterior mandibular canal position',
    description:
      'A morphometric study evaluating whether external facial width can act as a surrogate marker for posterior mandibular width and relative inferior alveolar canal position.',
  },
  {
    title: 'AI-assisted dental anatomy education',
    description:
      'Evaluation of large language models and multimodal AI systems in anatomical knowledge, image interpretation, and student-facing dental anatomy learning workflows.',
  },
]

const awards = [
  '1st place, Young Investigator’s Award — Congress of the University of Medicine and Pharmacy “Carol Davila”, Bucharest',
  '1st place, Scientific Presentations, Preclinical Section — Dent-X Congress',
  'JASSO Scholarship — Extended Student Exchange Program, Faculty of Dentistry, Niigata University, Japan',
]

const teachingImages = [
  {
    src: teachingOne,
    title: 'CBCT anatomy visualization',
  },
  {
    src: teachingTwo,
    title: 'Craniofacial 3D rendering',
  },
  {
    src: teachingThree,
    title: 'Greater palatine canal topography',
  },
]

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">{title}</h2>
      {text ? <p className="mt-5 text-lg leading-8 text-slate-600">{text}</p> : null}
    </div>
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
          <div className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(15,23,42,0.12),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.12),transparent_28%)]" />
        <div className="relative mx-auto grid min-h-[86vh] max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-[1.1fr_0.9fr] md:px-8">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">
              Anatomy · Imaging · Evidence synthesis
            </p>
            <h1 className="max-w-4xl text-5xl font-black tracking-tight text-slate-950 md:text-7xl">
              Răzvan Costin Tudose
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-9 text-slate-700">
              Anatomy researcher focused on head and neck anatomical variation, CBCT/CTA morphometry, vascular anatomy, and clinically oriented anatomical evidence synthesis.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-slate-700">
              <span className="rounded-full bg-slate-100 px-4 py-2">Carol Davila University of Medicine and Pharmacy</span>
              <span className="rounded-full bg-slate-100 px-4 py-2">Bucharest, Romania</span>
              <span className="rounded-full bg-slate-100 px-4 py-2">Faculty of Dentistry</span>
            </div>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#publications"
                className="rounded-full bg-slate-950 px-7 py-3 text-center font-semibold text-white shadow-lg shadow-slate-300 transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                View selected publications
              </a>
              <a
                href="#research"
                className="rounded-full border border-slate-300 bg-white px-7 py-3 text-center font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:border-slate-950"
              >
                Research profile
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

      <section id="research" className="px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Research profile"
            title="A focused portfolio in anatomical variation and imaging-based morphometry"
            text="The website should present a coherent research identity, not only a list of activities. These are the pillars that best represent the academic direction."
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

      <section id="publications" className="bg-slate-950 px-5 py-24 text-white md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Selected publications"
            title="Peer-reviewed work"
            text="A curated selection is stronger than an unstructured exhaustive list. The full publication list can be linked separately through PubMed, Google Scholar, or ORCID."
          />
          <div className="grid gap-5">
            {publications.map((publication) => (
              <a
                key={publication.title}
                href={publication.url}
                target="_blank"
                rel="noreferrer"
                className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.08]"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">{publication.tag}</p>
                    <h3 className="text-xl font-bold leading-snug text-white md:text-2xl">{publication.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{publication.authors}</p>
                    <p className="mt-2 text-sm font-semibold text-slate-400">{publication.journal}</p>
                  </div>
                  <span className="shrink-0 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition group-hover:border-white/40">
                    PubMed →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Current direction"
            title="Active research themes"
            text="This section gives visitors a reason to understand where the work is going, not only what has already been published."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-950">{project.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-600">{project.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="awards" className="bg-white px-5 py-24 md:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrow="Recognition" title="Awards and academic distinctions" />
          <div className="space-y-4">
            {awards.map((award) => (
              <div key={award} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-lg font-semibold leading-8 text-slate-800">
                {award}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="teaching" className="px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Teaching and visualization"
            title="Imaging anatomy as an educational tool"
            text="CBCT, 3D rendering, and annotated anatomical reconstructions can give the site a distinctive visual identity while remaining academically serious."
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
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Contact</p>
          <h2 className="text-4xl font-black tracking-tight md:text-6xl">Academic correspondence</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            For research collaboration, academic correspondence, lectures, or manuscript-related communication, contact me by email.
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
