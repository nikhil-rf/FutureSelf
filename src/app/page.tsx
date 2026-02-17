"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Zap,
  AlertTriangle,
  PenLine,
  Target,
  Clock,
  Smartphone,
  Repeat,
  Mic,
  Star,
  ChevronRight,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 border-b border-border/50 glass">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-btn flex items-center justify-center">
              <span className="text-white font-bold text-sm">F</span>
            </div>
            <span className="font-semibold text-foreground">FutureSelf</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#problem" className="hover:text-foreground transition-colors">The Problem</a>
            <a href="#how-it-works" className="hover:text-foreground transition-colors">How it works</a>
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#social-proof" className="hover:text-foreground transition-colors">Stories</a>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/login" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Sign in
            </Link>
            <Link href="/register" className="gradient-btn text-white px-4 py-2 rounded-lg text-sm font-medium">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-start/5 to-transparent pointer-events-none" />
        <div className="absolute top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-start/10 rounded-full blur-[120px] pointer-events-none" />
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
              <Zap className="w-3.5 h-3.5" />
              Your future self is waiting
            </span>
          </motion.div>
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold text-foreground leading-tight mb-6"
          >
            Don&apos;t let important things
            <br />
            <span className="gradient-text">quietly disappear.</span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            The reminder system for your future self. Simple, contextual, and
            impossible to ignore when it matters most.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/register"
              className="gradient-btn text-white px-8 py-4 rounded-xl font-medium flex items-center gap-2 text-base pulse-glow"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="#how-it-works"
              className="px-8 py-4 rounded-xl font-medium border border-border text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all text-base"
            >
              See how it works
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why traditional reminders <span className="gradient-text">fail</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Your brain isn&apos;t designed to hold onto everything.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Brain,
                title: "The Mental Load",
                desc: "Trying to remember everything leads to anxiety and mental fatigue. You're using processing power just to hold onto data.",
              },
              {
                icon: AlertTriangle,
                title: "Broken Context",
                desc: 'Reminders pop up at the wrong time or place. Seeing "Buy Milk" while you\'re in a deep work meeting is useless noise.',
              },
              {
                icon: Zap,
                title: "Digital Noise",
                desc: "Important tasks get lost in a sea of unimportant notifications from social media, news, and spam.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-card border border-border rounded-2xl p-8 group hover:border-primary/30 transition-all gradient-border"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-6 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Offload your brain in <span className="gradient-text">3 steps</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                icon: PenLine,
                title: "Write",
                desc: 'Jot down a thought instantly. Natural language processing understands "Remind me to buy milk tomorrow".',
              },
              {
                step: "02",
                icon: Target,
                title: "Choose",
                desc: "Set the context. Is it a time? A location? Or when you open a specific app? You define the trigger.",
              },
              {
                step: "03",
                icon: Zap,
                title: "Nudge",
                desc: "Receive a gentle, inescapable nudge exactly when it's relevant. Close the loop and free your mind.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative text-center"
              >
                <div className="text-7xl font-black text-primary/10 absolute -top-4 left-1/2 -translate-x-1/2 select-none">
                  {item.step}
                </div>
                <div className="relative z-10 pt-8">
                  <div className="w-14 h-14 rounded-2xl gradient-btn flex items-center justify-center mx-auto mb-5">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything you need to <span className="gradient-text">focus</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Target,
                title: "Contextual Reminders",
                desc: 'Triggers based on where you are, not just when. "Remind me when I leave the office."',
              },
              {
                icon: Smartphone,
                title: "Multi-platform",
                desc: "Seamless sync across all your devices.",
              },
              {
                icon: Repeat,
                title: "Habit Loops",
                desc: "Recurring reminders that adapt to your completion streaks.",
              },
              {
                icon: Mic,
                title: "Voice Capture",
                desc: "Capture thoughts on the go with high-fidelity voice-to-text.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-card border border-border rounded-2xl p-6 group hover:border-primary/30 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section id="social-proof" className="py-24 px-6 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Who is this for?
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-3xl p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-start to-violet-end" />
            <div className="flex items-start gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
              &ldquo;Before FutureSelf, my thesis deadlines were a nightmare. Now, I get
              nudged exactly when I plan to study, not when I&apos;m out with friends.
              It&apos;s like having a project manager in my pocket.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-start to-violet-end flex items-center justify-center">
                <span className="text-white text-sm font-semibold">SC</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Sarah Chen</p>
                <p className="text-xs text-muted-foreground">Graduate Student, MIT</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-violet-start/10 to-transparent pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Your future self will
            <br />
            <span className="gradient-text">thank you.</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Join thousands of focused individuals who have stopped forgetting and
            started doing.
          </p>
          <Link
            href="/register"
            className="gradient-btn text-white px-10 py-4 rounded-xl font-medium inline-flex items-center gap-2 text-lg pulse-glow"
          >
            Start Free — 14 days
            <ChevronRight className="w-5 h-5" />
          </Link>
          <p className="text-xs text-muted-foreground mt-4">
            14-day free trial. No credit card required.
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded gradient-btn flex items-center justify-center">
              <span className="text-white font-bold text-xs">F</span>
            </div>
            <span className="text-sm text-muted-foreground">
              FutureSelf © 2024 · Mindful Tech Group
            </span>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
