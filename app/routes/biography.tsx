import type { MetaFunction } from "react-router";
import { Link } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Biography - Jackson Siva Imire" },
    {
      name: "description",
      content: "The life story and professional legacy of Jackson Siva Imire",
    },
  ];
};

export default function Biography() {
  return (
    <div className="min-h-screen bg-[#fdfcf0] py-12 px-4 sm:px-6 lg:px-8 font-serif text-slate-900">
      <div className="max-w-5xl mx-auto">
        {/* Navigation */}
        <nav className="mb-8">
          <Link
            to="/"
            className="text-amber-800 hover:text-amber-600 flex items-center gap-2 transition-colors"
          >
            ← Back to Family Lineage
          </Link>
        </nav>

        <div className="bg-white shadow-2xl rounded-sm border border-slate-200 overflow-hidden">
          {/* Header Section */}
          <header className="bg-slate-900 text-white p-10 text-center border-b-4 border-amber-500">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
              Jackson Siva Imire
            </h1>
            <p className="text-amber-400 uppercase tracking-[0.3em] text-sm">
              Life & Legacy — Born 1945
            </p>
          </header>
          {/* Narrative Summary Section */}
          <section className="bg-amber-50/50 p-8 md:p-12 border-b border-slate-100">
            <div className="max-w-3xl mx-auto italic text-slate-800 leading-relaxed text-lg font-serif">
              <p className="mb-4">
                The story of Jackson Siva Imire is a testament to the power of
                resilience and the pursuit of knowledge. Born in 1945 to Daniel
                and Lenah—parents who never had the opportunity for formal
                schooling—Jackson’s own path to education was a mountain he
                chose to climb.
              </p>
              <p className="mb-4">
                Despite a two-year pause in his studies for lack of school fees,
                his determination brought him back to the classroom, eventually
                leading him from the village of Vokoli to the bustling streets
                of Nairobi. Through the sponsorship of family and his own sharp
                intellect, he transitioned from a young student at Guru Nanak to
                a cornerstone of Kenya’s telecommunications infrastructure.
              </p>
              <p>
                For a quarter of a century, Jackson served the East African and
                Kenyan Posts and Telecommunications Corporations, rising from a
                Telephone Operator to a Superintendent. Since 1977, his home in
                Umoja Estate has stood as a symbol of the stable, vibrant legacy
                he built for his six children and the generations that follow.
              </p>
            </div>
          </section>

          <div className="flex flex-col md:flex-row">
            {/* Sidebar: Personal & Heritage */}
            <aside className="w-full md:w-80 bg-slate-50 p-8 border-r border-slate-100">
              <section className="mb-10">
                <h2 className="text-xs font-black text-amber-700 uppercase tracking-widest mb-4">
                  Heritage
                </h2>
                <div className="space-y-4">
                  <div>
                    <p className="font-bold text-lg">Daniel Imire</p>
                    <p className="text-xs text-slate-500 italic">
                      c. 1905 — August 2002
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-lg">Lenah Gimase</p>
                    <p className="text-xs text-slate-500 italic">
                      c. 1907 — September 2003
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-200">
                    <p className="text-sm">
                      Circumcision Year: <span className="font-bold">1960</span>
                    </p>
                    <p className="text-sm">
                      Age Set: <span className="font-bold">I FOMU</span>
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-xs font-black text-amber-700 uppercase tracking-widest mb-4">
                  Residence
                </h2>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-bold">Umoja Estate</p>
                    <p className="text-slate-600 italic">1977 — Present</p>
                    <p className="text-slate-500 text-xs">Plot K 158</p>
                  </div>
                  <div>
                    <p className="font-bold">New Mathare</p>
                    <p className="text-slate-600 italic">1974 — 1976</p>
                    <p className="text-slate-500 text-xs">"Round About"</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xs font-black text-amber-700 uppercase tracking-widest mb-4">
                  Family Union
                </h2>
                <p className="text-sm">
                  Married <span className="font-bold">Jane Vugutsa</span>
                </p>
                <p className="text-xs text-slate-500 italic">August 4, 1980</p>
                <p className="text-xs text-slate-400 mt-1">
                  Daughter of Mzee Esau Beneti
                </p>
              </section>
            </aside>

            {/* Main Narrative */}
            <main className="flex-1 p-8 md:p-12">
              {/* Education Section */}
              <section className="mb-16">
                <h2 className="text-2xl font-bold border-b-2 border-slate-900 pb-2 mb-8">
                  Educational Journey
                </h2>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="flex-none w-16 text-amber-700 font-bold">
                      1956
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">
                        Entry to Vokoli D.E.B. Friends School
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        Started Standard One at age 11 under Headmaster Thomas
                        Gulema. Despite a two-year hiatus due to lack of school
                        fees (1958-1960), returned to complete primary
                        education.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-none w-16 text-amber-700 font-bold">
                      1965
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">
                        Kenya Primary Education (K.P.E.)
                      </h3>
                      <p className="text-slate-600 mb-2">
                        Completed Standard 7 under Headmaster Reuben Kiduula
                        following the abolition of K.A.P.E.
                      </p>
                      <div className="inline-grid grid-cols-3 gap-4 bg-slate-50 p-3 rounded border border-slate-100 text-sm">
                        <span>
                          English: <strong>B-</strong>
                        </span>
                        <span>
                          Math: <strong>C+</strong>
                        </span>
                        <span>
                          General: <strong>B+</strong>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-none w-16 text-amber-700 font-bold">
                      1969
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">
                        Cambridge Local Examination
                      </h3>
                      <p className="text-slate-600">
                        Successfully earned the{" "}
                        <span className="font-bold">
                          General Certificate of Education (G.C.E.)
                        </span>{" "}
                        at G.N. Secondary (Guru Nanak), Nairobi. Sponsored by
                        sister Truphena and brother-in-law David Anyaloto.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Career Section */}
              <section className="mb-16">
                <h2 className="text-2xl font-bold border-b-2 border-slate-900 pb-2 mb-8">
                  Professional Career
                </h2>
                <div className="relative pl-8 border-l-2 border-amber-200 space-y-10">
                  <div className="relative">
                    <div className="absolute -left-[41px] top-1 w-4 h-4 bg-slate-900 rounded-full border-4 border-amber-200"></div>
                    <h3 className="font-bold text-xl leading-none">
                      Telephone Superintendent II
                    </h3>
                    <p className="text-amber-700 text-sm font-bold mb-2">
                      1994 — 1997
                    </p>
                    <p className="text-slate-600">
                      Promoted to senior leadership within the Kenya Posts and
                      Telecommunication Corporation (KPTC).
                    </p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[41px] top-1 w-4 h-4 bg-slate-400 rounded-full border-4 border-amber-200"></div>
                    <h3 className="font-bold text-xl leading-none">
                      Telephone Supervisor
                    </h3>
                    <p className="text-amber-700 text-sm font-bold mb-2">
                      1986 — 1994
                    </p>
                    <p className="text-slate-600 italic">
                      East African Posts and Telecommunication Corporation
                    </p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[41px] top-1 w-4 h-4 bg-slate-400 rounded-full border-4 border-amber-200"></div>
                    <h3 className="font-bold text-xl leading-none">
                      Telephone Operator
                    </h3>
                    <p className="text-amber-700 text-sm font-bold mb-2">
                      June 19, 1972
                    </p>
                    <p className="text-slate-600">
                      The beginning of 25 years of continuous service.
                    </p>
                  </div>
                </div>
              </section>

              {/* Children Grid */}
              <section>
                <h2 className="text-2xl font-bold border-b-2 border-slate-900 pb-2 mb-8">
                  The Children of Jackson & Jane
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { name: "Hillary Lovoga Imire", date: "06-06-1981" },
                    { name: "Olive Andisi", date: "08-01-1983" },
                    { name: "Edwin Kesesi", date: "07-12-1984" },
                    { name: "Nelly Gimase", date: "20-05-1987" },
                    { name: "Faith Iminza", date: "16-03-1990" },
                    { name: "Allan Imire", date: "03-01-1992" },
                  ].map((child) => (
                    <div
                      key={child.name}
                      className="flex justify-between items-center p-3 border-b border-slate-100"
                    >
                      <span className="font-bold text-slate-800">
                        {child.name}
                      </span>
                      <span className="text-xs font-mono bg-slate-50 px-2 py-1 rounded text-slate-500">
                        {child.date}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
