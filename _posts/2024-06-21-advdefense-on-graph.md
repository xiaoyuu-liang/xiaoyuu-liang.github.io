---
title: 'Slide - Adversarial Defenses on Graph: Heuristic and Certified'
date: 2024-06-21
permalink: /posts/2024/06/adv-defense-on-graph/
tags:
  - Adversarial Examples
  - Adversarial Defenses
  - Graph Learning
---

This blog post provides an overview of adversarial defense techniques on graph-structured data.

In the **slides** (linked below), I introduce both **heuristic defenses** and **certified defenses** for graphs. I particularly focus on **randomized smoothing (RS)**-based certified defense methods, which have become popular due to their generality and ease of implementation.

Additionally, I describe my own approach, **CiDer**, which is a black-box method for certifying node classification models. Compared with standard RS-based approaches, CiDer avoids retraining and finetuning of the model, and instead relies on black-box decision outputs and statistical testing to produce certified guarantees.

---

📄 [Download slides overviewing graph adversarial defenses](/files/Adversarial_Defense_on_Graph.pdf)

📘 [Read the full CiDer paper (INFOCOM 2025)](https://xiaoyuu-liang.github.io/files/infocom2025.pdf)

---
**Reference**

> Liang, Xiaoyu, Haohua Du, Wen Ma, Ye Tian, and Xiaoya Xu. "CiDer: A Black-box Approach to Classify Node with Certified Robustness Guarantees." In IEEE INFOCOM 2025-IEEE Conference on Computer Communications, 2025.