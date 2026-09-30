'use client'

import Image from 'next/image'
import { useState } from 'react'

type Publication = {
  date: string
  title: string
  authors: string[]  // your name goes in here, gets bolded
  venue: string
  arxiv?: string
  pdf?: string
  code?: string
  thumb?: string     // path in /public, e.g. "/papers/electrafi.png"
  thumbFit?: 'cover' | 'contain'  // contain = show the whole image instead of cropping (default cover)
  bibtex?: string
}

const publications: Publication[] = [
  {
    date: 'Sep 2026',
    title: 'Complete Neural Electronic Initialization Accelerates Materials DFT',
    authors: ['Felix Ærtebjerg', 'Jonas Elsborg', 'Arghya Bhowmik'],
    venue: 'Preprint',
    arxiv: 'https://arxiv.org/abs/2609.21759',
    thumb: '/papers/complete-init.png',
    thumbFit: 'contain',
    bibtex: `@misc{aertebjerg2026completeneuralelectronic,
      title={Complete Neural Electronic Initialization Accelerates Materials DFT},
      author={Felix Ærtebjerg and Jonas Elsborg and Arghya Bhowmik},
      year={2026},
      eprint={2609.21759},
      archivePrefix={arXiv},
      primaryClass={cond-mat.mtrl-sci},
      url={https://arxiv.org/abs/2609.21759},
}`,
  },
  {
    date: 'Feb 2026',
    title: 'Global Plane Waves From Local Gaussians: Periodic Charge Densities in a Blink',
    authors: ['Jonas Elsborg', 'Felix Ærtebjerg',  'Luca Thiede', 'Alán Aspuru-Guzik', 'Tejs Vegge', 'Arghya Bhowmik'],
    venue: 'ICML',
    arxiv: 'https://arxiv.org/abs/2601.19966v1',
    thumb: '/papers/electrafi.png',
    bibtex: `@misc{elsborg2026globalplanewaveslocal,
      title={Global Plane Waves From Local Gaussians: Periodic Charge Densities in a Blink}, 
      author={Jonas Elsborg and Felix Ærtebjerg and Luca Thiede and Alán Aspuru-Guzik and Tejs Vegge and Arghya Bhowmik},
      year={2026},
      eprint={2601.19966},
      archivePrefix={arXiv},
      primaryClass={cond-mat.mtrl-sci},
      url={https://arxiv.org/abs/2601.19966}, 
}`,
  },
]

function PubThumb({ src, title, fit }: { src?: string; title: string; fit?: 'cover' | 'contain' }) {
  const initials = title
    .split(' ')
    .filter(w => w.length > 3)
    .slice(0, 2)
    .map(w => w[0].toUpperCase())
    .join('')

  if (src) {
    return (
      <div className="flex-shrink-0 w-28 h-20 sm:w-36 sm:h-24 rounded border border-slate-200 overflow-hidden bg-slate-100">
        <Image src={src} alt={`${title} thumbnail`} width={144} height={96} className={`${fit === 'contain' ? 'object-contain bg-white' : 'object-cover'} w-full h-full`} />
      </div>
    )
  }

  return (
    <div className="flex-shrink-0 w-28 h-20 sm:w-36 sm:h-24 rounded border border-indigo-100 bg-indigo-50 flex items-center justify-center">
      <span className="text-xl font-bold text-indigo-300 tracking-widest">{initials}</span>
    </div>
  )
}

export function PublicationsList({ myName }: { myName: string }) {
  return (
    <ul className="flex flex-col gap-6">
      {publications.map((pub) => (
        <PubEntry key={pub.title} pub={pub} myName={myName} />
      ))}
    </ul>
  )
}

function PubEntry({ pub, myName }: { pub: Publication; myName: string }) {
  const [bibtexOpen, setBibtexOpen] = useState(false)

  return (
    <li className="flex gap-4">
      <PubThumb src={pub.thumb} title={pub.title} fit={pub.thumbFit} />

      <div className="flex-1 min-w-0">
        <p className="font-semibold text-slate-900 dark:text-slate-900 leading-snug mb-1">
          {pub.title}
        </p>

        <p className="text-sm text-slate-600 dark:text-slate-600 mb-1">
          {pub.authors.map((a, i) => (
            <span key={a}>
              {i > 0 && ', '}
              {a === myName
                ? <span className="font-semibold text-indigo-700">{a}</span>
                : a}
            </span>
          ))}
        </p>

        <p className="text-sm mb-2">
          <span className="px-2 py-1 bg-blue-100 text-blue-700 font-semibold rounded text-sm tracking-wide">
            {pub.venue}
          </span>
        </p>

        <div className="flex flex-wrap gap-2 text-xs">
          {pub.arxiv && (
            <a href={pub.arxiv} target="_blank" rel="noopener noreferrer"
               className="px-2 py-0.5 bg-indigo-50 border border-indigo-200 rounded text-indigo-700 hover:bg-indigo-100 transition-colors">
              arXiv
            </a>
          )}
          {pub.pdf && (
            <a href={pub.pdf} target="_blank" rel="noopener noreferrer"
               className="px-2 py-0.5 bg-sky-50 border border-sky-200 rounded text-sky-700 hover:bg-sky-100 transition-colors">
              PDF
            </a>
          )}
          {pub.code && (
            <a href={pub.code} target="_blank" rel="noopener noreferrer"
               className="px-2 py-0.5 bg-slate-50 border border-slate-200 rounded text-slate-600 hover:bg-slate-100 transition-colors">
              Code
            </a>
          )}
          {pub.bibtex && (
            <button
              onClick={() => setBibtexOpen(o => !o)}
              className="px-2 py-0.5 bg-slate-50 border border-slate-200 rounded text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer">
              {bibtexOpen ? 'Hide BibTeX' : 'BibTeX'}
            </button>
          )}
        </div>

        {bibtexOpen && pub.bibtex && (
          <pre className="mt-3 p-3 bg-slate-50 border border-slate-200 rounded text-xs text-slate-700 overflow-x-auto whitespace-pre font-mono leading-relaxed">
            {pub.bibtex}
          </pre>
        )}
      </div>
    </li>
  )
}