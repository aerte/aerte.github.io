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
  bibtex?: string
}

const publications: Publication[] = [
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

function PubThumb({ src, title }: { src?: string; title: string }) {
  const initials = title
    .split(' ')
    .filter(w => w.length > 3)
    .slice(0, 2)
    .map(w => w[0].toUpperCase())
    .join('')

  if (src) {
    return (
      <div className="flex-shrink-0 w-28 h-20 rounded border border-slate-200 overflow-hidden bg-slate-100">
        <Image src={src} alt={`${title} thumbnail`} width={112} height={80} className="object-cover w-full h-full" />
      </div>
    )
  }

  return (
    <div className="flex-shrink-0 w-28 h-20 rounded border border-indigo-100 bg-indigo-50 flex items-center justify-center">
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
      <PubThumb src={pub.thumb} title={pub.title} />

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

        <p className="text-sm text-slate-500 italic mb-2">{pub.venue}</p>

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