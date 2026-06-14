import { PERSONAL, UI_TEXT } from "../data/portfolio"
import { useLang, t } from "../hooks/useLang.jsx"
import { Mail, Link, MapPin, Phone, GitBranch } from "lucide-react"

export default function Contact() {
  const { lang } = useLang()
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="fade-section mb-16">
          <p className="text-xs text-[#C9A84C] uppercase tracking-widest mb-4 font-semibold">{t(UI_TEXT.contact.label, lang)}</p>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            {t(UI_TEXT.contact.heading1, lang)}<br /><span className="gold-text">{t(UI_TEXT.contact.heading2, lang)}</span>
          </h2>
        </div>
        <div className="fade-section grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-[#888888] text-base leading-relaxed">{t(UI_TEXT.contact.body, lang)}</p>
            <div className="space-y-4">
              <a href={"mailto:" + PERSONAL.email} className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-[#141414] border border-[#2a2a2a] group-hover:border-[#C9A84C]/40 rounded-xl flex items-center justify-center transition-colors"><Mail size={16} className="text-[#555555] group-hover:text-[#C9A84C] transition-colors" /></div>
                <div><p className="text-xs text-[#555555] uppercase tracking-widest mb-0.5">{t(UI_TEXT.contact.form_email, lang)}</p><p className="text-white text-sm">{PERSONAL.email}</p></div>
              </a>
              <a href={"tel:" + PERSONAL.phone} className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-[#141414] border border-[#2a2a2a] group-hover:border-[#C9A84C]/40 rounded-xl flex items-center justify-center transition-colors"><Phone size={16} className="text-[#555555] group-hover:text-[#C9A84C] transition-colors" /></div>
                <div><p className="text-xs text-[#555555] uppercase tracking-widest mb-0.5">Phone</p><p className="text-white text-sm">{PERSONAL.phone}</p></div>
              </a>
              <a href={PERSONAL.github} target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-[#141414] border border-[#2a2a2a] group-hover:border-[#C9A84C]/40 rounded-xl flex items-center justify-center transition-colors"><GitBranch size={16} className="text-[#555555] group-hover:text-[#C9A84C] transition-colors" /></div>
                <div><p className="text-xs text-[#555555] uppercase tracking-widest mb-0.5">GitHub</p><p className="text-white text-sm">github.com/Namidok</p></div>
              </a>
              <a href={PERSONAL.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-[#141414] border border-[#2a2a2a] group-hover:border-[#C9A84C]/40 rounded-xl flex items-center justify-center transition-colors"><Link size={16} className="text-[#555555] group-hover:text-[#C9A84C] transition-colors" /></div>
                <div><p className="text-xs text-[#555555] uppercase tracking-widest mb-0.5">LinkedIn</p><p className="text-white text-sm">linkedin.com/in/srikar-kodi</p></div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#141414] border border-[#2a2a2a] rounded-xl flex items-center justify-center"><MapPin size={16} className="text-[#555555]" /></div>
                <div><p className="text-xs text-[#555555] uppercase tracking-widest mb-0.5">{lang === "en" ? "Location" : "Standort"}</p><p className="text-white text-sm">{PERSONAL.location}</p></div>
              </div>
            </div>
          </div>
          <div className="bg-[#141414] border border-[#2a2a2a] rounded-2xl p-8">
            <p className="text-xs text-[#C9A84C] uppercase tracking-widest mb-6 font-semibold">{t(UI_TEXT.contact.send, lang)}</p>
            <div className="space-y-4">
              <div><label className="text-xs text-[#555555] uppercase tracking-widest mb-2 block">{t(UI_TEXT.contact.form_name, lang)}</label><input type="text" placeholder={t(UI_TEXT.contact.form_name_placeholder, lang)} className="w-full bg-white/[0.03] border border-[#2a2a2a] focus:border-[#C9A84C]/40 rounded-xl px-4 py-3 text-sm text-white placeholder-[#555555] outline-none transition-colors" /></div>
              <div><label className="text-xs text-[#555555] uppercase tracking-widest mb-2 block">{t(UI_TEXT.contact.form_email, lang)}</label><input type="email" placeholder={t(UI_TEXT.contact.form_email_placeholder, lang)} className="w-full bg-white/[0.03] border border-[#2a2a2a] focus:border-[#C9A84C]/40 rounded-xl px-4 py-3 text-sm text-white placeholder-[#555555] outline-none transition-colors" /></div>
              <div><label className="text-xs text-[#555555] uppercase tracking-widest mb-2 block">{t(UI_TEXT.contact.form_message, lang)}</label><textarea rows={4} placeholder={t(UI_TEXT.contact.form_message_placeholder, lang)} className="w-full bg-white/[0.03] border border-[#2a2a2a] focus:border-[#C9A84C]/40 rounded-xl px-4 py-3 text-sm text-white placeholder-[#555555] outline-none transition-colors resize-none" /></div>
              <a href={"mailto:" + PERSONAL.email} className="block w-full bg-[#C9A84C] hover:bg-[#E8C96A] text-black font-bold py-3 rounded-xl transition-all duration-200 text-sm tracking-wide text-center hover:scale-105">{t(UI_TEXT.contact.send, lang)}</a>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-24 pt-8 border-t border-[#2a2a2a] flex items-center justify-between">
        <span className="text-[#555555] text-sm"><span className="gold-text font-bold">SK</span> · Srikar Kodi · 2026</span>
        <span className="text-[#555555] text-xs">{t(UI_TEXT.contact.built, lang)}</span>
      </div>
    </section>
  )
}
