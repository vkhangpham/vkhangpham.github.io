---
title: "the Omarchy experience"
tags: ["tech"]
description: "a short note on using Omarchy -- an Arch Linux distro, including some of my setups and debloating"
---

[Omarchy](https://omarchy.org) is probably the most exciting tech I've experienced in 2025.

<!--more-->

and last year was packed with crazy stuff -- things like [Claude Code](https://claude.com/product/claude-code), [OpenAI's Codex](https://openai.com/codex/), [Browser-use](https://browser-use.com/), and tons of winners from the open source community ([MiniMax M2](https://github.com/MiniMax-AI/MiniMax-M2), [Kimi K2](https://github.com/moonshotai/Kimi-K2), [DeepSeek R1](https://github.com/deepseek-ai/deepseek-r1), etc.).

now I know that **Omarchy** is completely irrelevant to the names I've just listed, but we can count all of them as loosely as _experiences_, right?

if you do not already know, [Omarchy](https://omarchy.org) is an **opinionated** Arch Linux distro created by [DHH](https://dhh.dk/). The word **"opinionated"** is very important here, because it hints that everything is already configured. And when I say everything, I mean **everything**: [Hyprland](https://hypr.land/), themes, fonts, devtools, browsers, productivity apps, and even streaming apps (!).

but wait, isn't being able to configure and customize your own machine the point of using Linux in general and Arch in particular? Well I think DHH understands the spirit too, so Omarchy doesn't take away the fun from you; instead, it makes the experience easier and simpler -- which is exactly what I want. Man, I can never forget the headache that **Hyprland** gave me when I was trying to set it up in college.

another thing that makes Omarchy great is that it is designed to be **keyboard-centric**. And I quote from the [docs](https://learn.omacom.io/2/the-omarchy-manual/51/navigation):

> Everything in Omarchy happens via the keyboard — EVERYTHING! When the system first starts, you literally can't do a thing with the mouse alone.

and even better: the keystrokes are actually easy to hit and make sense too. I feel like this is the problem for most other self-proclaimed "keyboard-centric" software -- they do not put enough effort into making the shortcuts easy for your fat fingers.

well, that being said, I still have several problems with Omarchy. Although they are so minimal that they are completely outweighed by the pros, let's also discuss them here.

the first one is the **hardware support**, especially for Wi-Fi. I have installed Omarchy on 3 different machines, including a PC connected to a monitor, a laptop, and an Intel MacBook. And on all of them, the Wi-Fi just doesn't work out of the box.

the second one is the **opinionated** pre-config. Like many other devs, I have my own preferences for how I want to use my tools. The pre-config of **Neovim** (btw) and recently **tmux** is very annoying. Binding a key to **btop** also doesn't make a lot of sense to me. And mapping _CapsLock_ to the _xcompose_ key instead of _Esc_ is just a crime to any Vim user. Luckily, we already have tools like [chezmoi](https://www.chezmoi.io/) and [GNU Stow](https://www.gnu.org/software/stow/) to the rescue!

the final problem is also the biggest problem: the **bloatware**. Although Omarchy is advertised as **minimal** and **"zero-bloat"**, being **opinionated** is still a more impactful trait. It is shipped with tons of software that is completely useless unless you are doing the same things as DHH. Things like _Pinta, Signal, OBS, HEY, Kdenlive, 1Password, Typora, Spotify, Whatsapp, Basecamp,_ etc. are just not really necessary to always be there, and I doubt a lot of people would need all of them. Crazy as it might sound, there is even a whole shortcut just to post something on X. I think a better approach should be a minimal base, and then a set of optional packages that you can choose to **easily** install later, like with _Steam_ or _NordVPN_. A quick note: some apps are actually web apps, which means they are not really taking up space on your machine. Well at least the processes of installing, removing, and remapping apps are easy -- I'll give it that.

I've been using Omarchy since August 2025, and it has been improving a lot since. But I think at some point, when the user base grows, DHH should think about having _two_ versions of Omarchy (just like 3b1b's [Manim](https://github.com/3b1b/manim)): a base/community version that is more minimal and is maintained by the community, and an opinionated version like the current one.
