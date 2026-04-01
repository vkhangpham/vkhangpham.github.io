---
title: "learn languages with an AI agent"
tags: ["tech"]
description: "my setup to learn languages"
---

despite the universal adoption of AI in almost all digital domain, I have yet to find a good product to learn a new language.

<!--more-->

more specifically, a product that is reliable and personalized enough that I can practice, and further is to prepare for a certification.

in Vietnam, we have 2 famous products that are advertised as English tutoring and test preparation: [ELSA Speak](https://vn.elsaspeak.com/), and [PREP](https://prepedu.com/). I've used both, and tbh, they are just bad. Every lesson and practice feels superficial and overall just don't bring you good value, especially with their prices.

and btw, I want to learn **French** too, not just English.

so, after a lot of trials and errors, I decided to setup my own personal AI language tutor.

<u>disclaimer</u>: I'm not affiliated with any of the companies listed. Moreover, this is a personal experience, and by the time I set this up, I'm no longer a beginner in French. So your experience may vary depending on many factors.

okay, so given that, let me explain the criteria and prerequisites. Firstly, my ultimate target is fairly simple: get to **level B2** in the [TCF](https://fr.wikipedia.org/wiki/Test_de_connaissance_du_fran%C3%A7ais) asap, which is a certification necessary for my graduation. I was able to get the level B1 in the previous attempt, so I already known what I'm doing and was familiar with the test format. The only hiccup is that I haven't touch any French for like, 2 years :)

so, what I'm looking for is something that:

- helps me revise the knowledge, especially the grammar and vocabulary
- helps me practice reading and multiple choice questions
- generates dynamic exercises, especially with modern readings and topic of my interest
- gives explanations for every detail I might ask (and I can get pretty relentless)
- tracks my progress
- improves with me so the workflow is smoother every time

that's quite a lot of boxes to tick, but I find the following setup to work well:

first, I use **a coding agent** instead of a general chatbot. Having used many different kind of agents and chatbots before, I think that coding agent is superior to every other form of personal agent. They are better engineered, better supported by the community, and they are way more flexible in problem solving, which you will see shortly. Another reason is that ~~I have an attachment issue with my terminal and I want to do exercise in my adorable vim over my favorite tmux setup~~ I'm more comfortable with a coding agent. I use [Codex](https://openai.com/codex/). I've tried [Claude Code](https://claude.com/solutions/coding), [Manus](https://manus.im/app), and recently [OpenClaw](https://openclaw.ai/) -- but I just like Codex best. To be fair, that [_"You are absolutely right"_ era](https://absolutelyright.lol/) of Claude Code still haunts me, even in my brightest day.

next, I gather some **data** that I want my AI to use and reference when teaching me. They are just a bunch of books in PDFs (that I'll never reveal how did I get), mostly grammar, vocab, and a few of sample tests. These gonna be the main source of teaching material, and be the grounding for your agent to not go off shore and teach you something irrelevant to the test. Using the books' table of content is also a good way to guide your agent on how to organize the lessons.

given that now we have the data, we can start setting up the **tools** that the agent will use while teaching. If you are not from a tech background, don't worry, you can ask your agent to build the tools itself -- that's the neat part of using a coding agent. You can add how many tools you want, but for me the core ones are:

1. **PDF parser and OCR:** to make use of the data resources that we have prepared. OCR is important; use a good one.
2. **web scraper:** to gather the data from the internet. This is necessary if you want dynamic material that covers contemporary world news (especially if you're practicing IELTS). Set it up, and have your agent try looking at a few journal websites. Your agent can create reading exercises from those articles.
3. **progress tracker:** to help you track your progress (obviously) and more importantly, help your agent track its teaching progress as well. This will store all your lessons, mistakes, questions on the way, vocabularies, weaknesses, etc. Don't worry; again, your agent will take care of this -- you can instruct it to always read the progress before a lesson, and always update it after a lesson. Personally, I'm using a mix of files as progress and [beads](https://github.com/steveyegge/beads) -- although maybe beads is an overkill.
4. **self-improving skill:** to let your agent learn from you. As the final criterion I've made above, I need an agent that can adapt to my workflow, my study pace. This tool, or skill, will allow your agent to have a sort of **persistant memory** of your preferences. For example, when I learn, I ask a lot for elaborations over the material: why using this word, what is the collocation, is it unnatural to say the other way, etc. And I think those questions and answers are very valuable. So I ask my agent to always reflect upon those questions at the end of a study session, and update into the lesson itself, and use them as feedback to improve the lessons. The neat part is _you only need to ask once_, and every lessons from that point will be improved based on the questions you asked for earlier sessions.
   At the point of this post, there is not a lot of self-improving skill. You can simply ask your agent to add your preferences in to its **AGENTS.md** file, or you can consider adopt [this](https://github.com/pskoett/pskoett-ai-skills/tree/main/skills/self-improvement).

finally, after all the data and tools, you'll need a **workflow**. There is nothing fancy about the word, it simply means _define how you want to study_. Do you want a session-based, where each time you invoke your agent will be a new lesson? Which skill do you want to focus on, vocab, reading, or grammar? Which test are you preparing for? What are your goals?
This is **the most important part** of the whole process. Take your time, discuss with your agent about it. And remember, you can always change the direction and your preferences with the tools we've set up above.

let's take an example of my workflow. I'm preparing for a TCF, targeting B2 level. I've already reached B1, but I haven't used French for a long time. I'm not very busy, so I can finish a lesson in one sitting. So, what I want is a **TCF study loop**: every time I learn is a new lesson of the following modules: _structure the la langue, vocabulaire, compréhension écrite, or mix_. The lesson will start with a warm-up based on my current weaknesses, which in turn are analyzed through practicing with my AI agent. Then comes the main module work; for vocabulary: get vocab from a book or a subject, craft a lesson that explain each one, craft a paragraph to put all the vocabs into context, and prepare practicing questions. While learning, I will ask for elaboration and clarification of anything I don't understand. Finally, the agent will integrate the results by updating vocab/errors/progression and writing the session journal.

that was a lot of words, you can simply read one real lesson [here](https://github.com/vkhangpham/francais/blob/master/sessions/2026-03-26_tcf_voc.md).

that's basically how I've been learning languages, and I find the experience better compare to all other commercial products. Of course this method requires a lot more effort, but the ROI is worth it, especially if you can host a local agent for free, or just use [Z.ai](https://z.ai) cheapest plan. I think there will definitely be a better way to do it soon, but for now, this is the best I've found.
