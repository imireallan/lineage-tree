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
              Life & Legacy — Born 1945 Dec 30th
            </p>
          </header>
          {/* Narrative Summary Section */}
          <section className="bg-amber-50/50 p-8 md:p-12 border-b border-slate-100">
            <div className="max-w-3xl mx-auto italic text-slate-800 leading-relaxed text-lg font-serif">
              <p className="mb-4">
                The story of Jackson Siva Imire is a testament to the power of
                resilience and the pursuit of knowledge. Born in 1945 to Daniel
                Imire and Lenah Gimase—parents who never had the opportunity for
                formal schooling—Jackson’s own path to education was a mountain
                he chose to climb.
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
                      Age Set: <span className="font-bold">IFOMU</span>
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
                    <p className="font-bold">New Mathare (Round About)</p>
                    <p className="text-slate-600 italic">1974 — 1976</p>
                  </div>
                  <div>
                    <p className="font-bold">Umoja Estate</p>
                    <p className="text-slate-600 italic">1977 — Present</p>
                    <p className="text-slate-500 text-xs">Plot K 158</p>
                  </div>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-xs font-black text-amber-700 uppercase tracking-widest mb-4">
                  Family Union
                </h2>
                <p className="text-sm">
                  Married <span className="font-bold">Jane Vugutsa</span>
                </p>
                <p className="text-xs text-slate-500 italic">August 4, 1980</p>
                <p className="text-xs text-slate-400 mt-1">
                  Daughter of Mzee Esau Beneti & Rhoda Angeci
                </p>
              </section>
              {/* RETIREMENT SECTION */}
              <section className="mb-10">
                <h2 className="text-xs font-black text-amber-700 uppercase tracking-widest mb-4">
                  Retirement
                </h2>
                <div className="space-y-4">
                  <div>
                    <p className="font-bold text-slate-900">
                      Official Retirement
                    </p>
                    <p className="text-slate-600 italic">January 1, 1997</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800 uppercase tracking-tight">
                      Retirement Age
                    </p>
                    <p className="text-sm text-slate-600">51 Years Old</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800 uppercase tracking-tight">
                      Total Service
                    </p>
                    <p className="text-sm text-slate-600">
                      25 Years of Dedicated Service
                    </p>
                  </div>
                </div>
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
                      1956 - 1965
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
                      1965 - 1966
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
                      1966 - 1969
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">
                        Guru Nanak (GN) Secondary School Nairobi
                      </h3>
                      <p className="text-slate-600">
                        Sat for Cambridge Local Examination and successfully
                        earned the General Certificate of Education (G.C.E.).
                        Sponsored by sister Truphena and brother-in-law David
                        Anyolo.
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
                    <div className="absolute -left-[41px] top-1 w-4 h-4 bg-slate-400 rounded-full border-4 border-amber-200"></div>
                    <h3 className="font-bold text-xl leading-none">Jobless</h3>
                    <p className="text-amber-700 text-sm font-bold mb-2">
                      1970 - 1972
                    </p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[41px] top-1 w-4 h-4 bg-slate-400 rounded-full border-4 border-amber-200"></div>
                    <h3 className="font-bold text-xl leading-none">Training</h3>
                    <p className="text-amber-700 text-sm font-bold mb-2">
                      6 months
                    </p>
                    <p className="text-slate-600">
                      Successfully completed the Telephone Operator course at
                      the Central Training School (Mbagathi). Following
                      certification, commissioned as a Telephone Operator at the
                      Nairobi General Post Office
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
                  <div className="relative">
                    <div className="absolute -left-[41px] top-1 w-4 h-4 bg-slate-400 rounded-full border-4 border-amber-200"></div>
                    <h3 className="font-bold text-xl leading-none">
                      Supervisory Training
                    </h3>
                    <p className="text-amber-700 text-sm font-bold mb-2">
                      6 months
                    </p>
                    <p className="text-slate-600">
                      Successfully completed the Telephone Supervisor course at
                      the Central Training School (Mbagathi). Following
                      certification, commissioned as a Telephone Supervisor at
                      the Telephone Exchange Nairobi.
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
                    <div className="absolute -left-[41px] top-1 w-4 h-4 bg-slate-900 rounded-full border-4 border-amber-200"></div>
                    <h3 className="font-bold text-xl leading-none">
                      Telephone Superintendent II
                    </h3>
                    <p className="text-amber-700 text-sm font-bold mb-2">
                      1994 — 1997(Retired)
                    </p>
                    <p className="text-slate-600">
                      Promoted to senior leadership within the Kenya Posts and
                      Telecommunication Corporation (KPTC).
                    </p>
                  </div>
                </div>
              </section>
              {/* Post-Retirement & Community Leadership */}
              <section className="mb-16">
                <h2 className="text-2xl font-bold border-b-2 border-slate-900 pb-2 mb-8 uppercase tracking-tight">
                  Relocation & Community Leadership
                </h2>

                <div className="bg-amber-50/30 p-6 rounded-lg border border-amber-100 mb-8">
                  <p className="text-slate-700 leading-relaxed font-serif text-lg italic">
                    "After retiring, we remained in Nairobi until 2011, then we
                    relocated back to our rural home. In the years since, I have
                    dedicated my time to farming and serving my community
                    through leadership roles in local educational institutions."
                  </p>
                </div>

                <div className="space-y-6">
                  <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-4">
                    Board of Management Appointments
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Vokoli Primary School */}
                    <div className="bg-white p-4 rounded border-l-4 border-slate-400 shadow-sm hover:shadow-md transition-shadow">
                      <span className="text-xs font-bold text-slate-500 uppercase">
                        2015 — 2018
                      </span>
                      <h4 className="font-bold text-slate-900">
                        Vokoli Primary School
                      </h4>
                      <p className="text-sm text-slate-600">
                        Member, Board of Management
                      </p>
                    </div>
                    {/* Sabatia Primary School (Previous Term) */}
                    <div className="bg-white p-4 rounded border-l-4 border-slate-400 shadow-sm hover:shadow-md transition-shadow">
                      <span className="text-xs font-bold text-slate-500 uppercase">
                        2019 — 2022
                      </span>
                      <h4 className="font-bold text-slate-900">
                        Sabatia Primary School
                      </h4>
                      <p className="text-sm text-slate-600">
                        Member, Board of Management
                      </p>
                    </div>
                    {/* Moi Girls' High School - Vokoli */}
                    <div className="bg-white p-4 rounded border-l-4 border-slate-400 shadow-sm hover:shadow-md transition-shadow">
                      <span className="text-xs font-bold text-slate-500 uppercase">
                        2022 — 2025
                      </span>
                      <h4 className="font-bold text-slate-900">
                        Moi Girls' High School – Vokoli
                      </h4>
                      <p className="text-sm text-slate-600">
                        Member, Board of Management
                      </p>
                    </div>
                    {/* Sabatia Primary School */}
                    <div className="bg-white p-4 rounded border-l-4 border-amber-600 shadow-sm hover:shadow-md transition-shadow">
                      <span className="text-xs font-bold text-amber-700 uppercase">
                        2025 — 2028
                      </span>
                      <h4 className="font-bold text-slate-900">
                        Sabatia Primary School
                      </h4>
                      <p className="text-sm text-slate-600">
                        Member, Board of Management
                      </p>
                      <p className="text-[10px] text-slate-400 mt-1 italic">
                        Appointed by Vihiga County Education Board
                      </p>
                    </div>
                    {/* Moi Girls' High School - Vokoli */}
                    <div className="bg-white p-4 rounded border-l-4 border-amber-600 shadow-sm hover:shadow-md transition-shadow">
                      <span className="text-xs font-bold text-amber-700 uppercase">
                        2025 — 2028
                      </span>
                      <h4 className="font-bold text-slate-900">
                        Moi Girls' High School – Vokoli
                      </h4>
                      <p className="text-sm text-slate-600">
                        Member, Board of Management
                      </p>
                      <p className="text-[10px] text-slate-400 mt-1 italic">
                        Appointed by Vihiga County Education Board
                      </p>
                    </div>
                    {/* Sabatia Farmers Cooperative Society */}
                    <div className="bg-white p-4 rounded border-l-4 border-amber-600 shadow-sm hover:shadow-md transition-shadow">
                      <span className="text-xs font-bold text-amber-700 uppercase">
                        2023 —
                      </span>
                      <h4 className="font-bold text-slate-900">
                        Sabatia Farmers Cooperative Society
                      </h4>
                      <p className="text-sm text-slate-600">
                        Member of Cooperative Society
                      </p>
                      <p className="text-[10px] text-slate-400 mt-1 italic">
                        Appointed by Sabatia Sub-county Cooperative Society
                      </p>
                    </div>
                  </div>
                </div>
                {/* Religious & Spiritual Life */}
                <section className="my-16">
                  <h2 className="text-2xl font-bold border-b-2 border-slate-900 pb-2 mb-8 uppercase tracking-tight flex items-center gap-3">
                    <span>Faith & Spiritual Journey</span>
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    {/* Milestone 1: Associate Membership */}
                    <div className="bg-green-50/50 p-5 rounded border border-green-100 relative">
                      <span className="text-[10px] font-black text-green-700 uppercase tracking-widest block mb-2">
                        July 1, 2012
                      </span>
                      <h4 className="font-bold text-slate-900 leading-tight mb-1">
                        Associate Membership
                      </h4>
                      <p className="text-xs text-slate-600 italic">
                        Vokoli Yearly Meeting of Friends
                      </p>
                      <p className="text-xs mt-3 text-slate-500 font-serif">
                        Received as an Associate member at Wekudza Village
                        meeting.
                      </p>
                    </div>
                    <div className="bg-blue-50/50 p-5 rounded border border-blue-100 relative shadow-sm">
                      <span className="text-[10px] font-black text-blue-700 uppercase tracking-widest block mb-2">
                        July 1, 2012
                      </span>
                      <h4 className="font-bold text-slate-900 leading-tight mb-1">
                        Quaker Men Treasurer
                      </h4>
                      <p className="text-xs text-slate-600 italic">
                        Wekudza Village Meeting
                      </p>
                    </div>

                    {/* Milestone 3: Church Leadership */}
                    <div className="bg-blue-50/50 p-5 rounded border border-blue-100 relative shadow-sm border-l-4 border-l-blue-500">
                      <span className="text-[10px] font-black text-blue-700 uppercase tracking-widest block mb-2">
                        July 1, 2012
                      </span>
                      <h4 className="font-bold text-slate-900 leading-tight mb-1">
                        Treasurer Quaker Men
                      </h4>
                      <p className="text-xs text-slate-600 italic">
                        Vokoli Monthly Meeting
                      </p>
                    </div>

                    {/* Milestone 2: Full Membership */}
                    <div className="bg-rose-50/50 p-5 rounded border border-rose-100 relative">
                      <span className="text-[10px] font-black text-rose-700 uppercase tracking-widest block mb-2">
                        Nov 17, 2013
                      </span>
                      <h4 className="font-bold text-slate-900 leading-tight mb-1">
                        Full Membership Certificate
                      </h4>
                      <p className="text-xs text-slate-600 italic">
                        Vokoli Yearly Meeting of Friends
                      </p>
                      <p className="text-xs mt-3 text-slate-500 font-serif">
                        Attained full membership status in the Religious Society
                        of Friends (Quakers).
                      </p>
                    </div>
                    {/* Milestone 3: Church Leadership */}
                    <div className="bg-blue-50/50 p-5 rounded border border-blue-100 relative shadow-sm border-l-4 border-l-blue-500">
                      <span className="text-[10px] font-black text-blue-700 uppercase tracking-widest block mb-2">
                        Nov 17, 2013
                      </span>
                      <h4 className="font-bold text-slate-900 leading-tight mb-1">
                        Chairman of Church Building Project
                      </h4>
                      <p className="text-xs text-slate-600 italic">
                        Wekudza Village Meeting
                      </p>
                    </div>
                    <div className="bg-blue-50/50 p-5 rounded border border-blue-100 relative shadow-sm border-l-4 border-l-blue-500">
                      <span className="text-[10px] font-black text-blue-700 uppercase tracking-widest block mb-2">
                        March 11, 2024
                      </span>
                      <h4 className="font-bold text-slate-900 leading-tight mb-1">
                        Quaker Men Treasurer (Reappointment)
                      </h4>
                      <p className="text-xs text-slate-600 italic">
                        Wekudza Village Meeting
                      </p>
                      <p className="text-xs mt-3 text-slate-500 font-serif">
                        Appointed to serve as treasurer for a 3-year term
                        representing Quaker men.
                      </p>
                    </div>
                  </div>
                </section>
              </section>

              {/* Children Grid */}
              <section className="mb-16">
                <h2 className="text-2xl font-bold border-b-2 border-slate-900 pb-2 mb-4">
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
              <section>
                <h2 className="text-2xl font-bold border-b-2 border-slate-900 pb-2 mt-4 mb-8">
                  The Grandchildren of Jackson & Jane
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { name: "Tanesha Afandi Jangay'a", date: "20-10-2010" },
                    { name: "Briann Tasha Rotah", date: "04-01-2014" },
                    { name: "Jayden Siva Lovoga", date: "04-07-2014" },
                    { name: "Bravin Ricky Rotah", date: "16-04-2017" },
                    { name: "Jason Joseph Lovoga", date: "03-07-2018" },
                    { name: "Nolan George Oluoch", date: "21-09-2019" },
                    { name: "Reign Siva Imire", date: "13-06-2021" },
                    { name: "Nylah Vugutsa Imire", date: "26-08-2021" },
                    { name: "Aziel Jackson Oluoch", date: "16-09-2021" },
                    { name: "Reilly Jackson Rotah", date: "27-05-2022" },
                    { name: "Lenani Vugutsa Imire", date: "10-08-2024" },
                    { name: "Derian Ishael Oluoch", date: "15-01-2025" },
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
