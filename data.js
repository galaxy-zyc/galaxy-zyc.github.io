/*
 * Edit this file to update your homepage. No installation or build is needed.
 * Paths are relative to index.html. Empty Scholar and LinkedIn URLs show placeholders.
 * Leave CV, publication Code, and Project URLs as "" to hide them.
 * Add papers to publications (newest first) and awards to awards (grouped by stage).
 */
window.HOMEPAGE_DATA = {
  // Paste your own MapMyVisitors map.js embed URL here after registration.
  visitorMapUrl: "https://mapmyvisitors.com/map.js?d=hbTuOj4-n-4Hx1YiD_mnloOXpfOythfpoVDy8MZNCGw&cl=d7dfe9&w=a&co=ffffff&ct=768296&cmo=7297c6&cmn=2056a1",
  profile: {
    name: "Yuanchang Zhou",
    role: "PhD Student",
    institution: "University of Chinese Academy of Sciences",
    parentInstitution: "Institute of Computing Technology, CAS",
    // Personal portrait
    photo: "assets/profile.png",
    email: "zhouyuanchang23s@ict.ac.cn",
    github: "https://github.com/galaxy-zyc",
    scholar: "https://scholar.google.com/citations?user=qZ9LY30AAAAJ&hl=en",
    linkedin: "",
    cv: "",
    wechatId: "",
    // Example after adding a real QR image: "assets/wechat.png"
    wechatQr: "assets/wechat.jpg",
    bio: [
      "I am a PhD student in Computer Science at the Institute of Computing Technology, Chinese Academy of Sciences, supervised by Weile Jia.",
      "My research focuses on **AI for Science (AI4S)** and **high-performance computing**, with a particular emphasis on **machine learning interatomic potentials (MLIPs)**. I develop **foundation MLIPs** through the co-design of model architectures and computational systems, aiming to combine high accuracy and scalability with efficient training and inference for reliable scientific applications at larger scales.",
      "Feel free to contact me if you have any questions or would like to discuss my work."
    ]
  },

  // News and dates supplied by the homepage owner, newest first.
  news: [
    {
      "date": "Sep 2026",
      "datetime": "2026-09",
      "text": "Three papers accepted to NeurIPS 2026!",
      "url": ""
    },
    {
      "date": "Apr 2026",
      "datetime": "2026-04",
      "text": "We trained a billion-parameter universal MLIP!",
      "url": ""
    },
    {
      "date": "Jan 2026",
      "datetime": "2026-01",
      "text": "Our work was reported by ",
      "linkLabel": "ICT",
      "suffix": "!",
      "url": "https://ict.cas.cn/xwgg/jssxw/202604/t20260422_8189773.html"
    },
    {
      "date": "Jan 2026",
      "datetime": "2026-01",
      "text": "One paper accepted to ICLR 2026!",
      "url": ""
    },
    {
      "date": "Sep 2025",
      "datetime": "2025-09",
      "text": "One paper accepted to NeurIPS 2025!",
      "url": ""
    },
    {
      "date": "Dec 2024",
      "datetime": "2024-12",
      "text": "One paper accepted to IPDPS 2025!",
      "url": ""
    }
  ],

  publications: [
    {
      title: "Flux: Online, Fine-Grained Data Scheduling for Training Machine Learning Interatomic Potentials",
      authors: ["Yuanchang Zhou", "Chen Wang", "Hongtao Xu", "Mingzhen Li", "Guangming Tan", "Weile Jia"],
      venue: "NeurIPS",
      year: "2026",
      preprint: false,
      abstract: "Large-scale training of machine learning interatomic potentials (MLIPs) increasingly relies on data parallelism over heterogeneous atomistic data. In this setting, atom count captures an important part of the per-rank workload, but structures with similar atom counts can still induce different graph workloads through variations in graph count, cutoff edges, higher-order geometric features, and graph-collation overhead. This makes conventional atom-count batching and offline load tables both incomplete and inflexible, especially when the model architecture, cutoff radius, or data mixture changes. We present Flux, an online workload-aware scheduler for distributed MLIP training. Flux estimates structure-dependent workload signals from lightweight physical and geometric priors during data loading, calibrates them against runtime and memory costs, and forms balanced, memory-feasible local mini-batches across data-parallel ranks. Without requiring precomputed graph metadata, Flux can be used as a drop-in replacement for the standard distributed sampler, making it flexible and portable across training setups. Across large-scale atomistic datasets and three representative MLIP architectures, eSEN, MatRIS, and AllScAIP, Flux improves training throughput by up to 2.23–4.76× without degrading convergence.",
      abstractSource: "Flux_nips.pdf, Abstract",
      image: "assets/publications/flux.png",
      imageAlt: "Flux workflow: online graph-size estimation, runtime and memory prediction, and balanced mini-batch scheduling across GPUs.",
      imageCaption: "Flux · online data scheduling",
      conferenceUrl: "https://neurips.cc/virtual/2026/poster/151170",
      arxiv: "",
      pdf: "",
      code: "",
      project: ""
    },
    {
      title: "A graph neural network for the era of large atomistic models",
      authors: ["Duo Zhang", "Anyang Peng", "Chun Cai", "Wentao Li", "Yuanchang Zhou", "Jinzhe Zeng", "Mingyu Guo", "Chengqian Zhang", "Bowen Li", "Hong Jiang", "Tong Zhu", "Weile Jia", "Linfeng Zhang", "Han Wang"],
      venue: "npj Computational Materials",
      year: "2026",
      preprint: false,
      abstract: "Foundation models, or large atomistic models (LAMs), aim to universally represent the ground-state potential energy surface (PES) of atomistic systems as defined by density functional theory (DFT). The scaling law is pivotal in the development of large models, suggesting that their generalizability in downstream tasks consistently improves with increased model size, expanded training datasets, and larger computational budgets. In this study, we present DPA3, a multi-layer graph neural network founded on line graph series (LiGS), designed explicitly for the era of LAMs. We demonstrate that the generalization error of the DPA3 model adheres to the scaling law. The scalability in the number of model parameters is attained by stacking additional layers within DPA3. Additionally, the model employs a dataset encoding mechanism that decouples the scaling of training data size from the model size within its multi-task training framework. When trained as problem-oriented potential energy models, the DPA3 model exhibits superior accuracy in the majority of benchmark cases, encompassing systems with diverse features, including molecules, bulk materials, surface and cluster catalysts, two-dimensional materials, and battery materials. When trained as a LAM on the OpenLAM-v1 dataset, the DPA-3.1-3M model exhibits lowest overall zero-shot generalization error across 12 downstream tasks spanning a diverse array of research domains. This performance suggests superior accuracy as an out-of-the-box potential model, requiring minimal fine-tuning data for downstream scientific applications.",
      abstractSource: "https://arxiv.org/abs/2506.01686",
      image: "assets/publications/dpa3.png",
      imageAlt: "DPA3 architecture showing line graph transformations, line graph series, and message-passing update blocks.",
      imageCaption: "DPA3 · model architecture",
      conferenceUrl: "https://www.nature.com/articles/s41524-026-02146-2",
      conferenceLabel: "Paper",
      arxiv: "https://arxiv.org/abs/2506.01686",
      pdf: "https://www.nature.com/articles/s41524-026-02146-2.pdf",
      code: "https://github.com/deepmodeling/deepmd-kit",
      project: ""
    },
    {
      title: "Breaking the Training Barrier of Billion-Parameter Universal Machine Learning Interatomic Potentials",
      authors: ["Yuanchang Zhou", "Hongyu Wang", "Yiming Du", "Yan Wang", "Mingzhen Li", "Siyu Hu", "Xiangyu Zhang", "Weijian Liu", "Chen Wang", "Zhuoqiang Guo", "Long Wang", "Jingde Bu", "Yutong Lu", "Guangming Tan", "Weile Jia"],
      venue: "arXiv preprint",
      year: "2026",
      preprint: true,
      abstract: "Universal Machine Learning Interatomic Potentials (uMLIPs), pre-trained on massively diverse datasets encompassing inorganic materials and organic molecules across the entire periodic table, serve as foundational models for quantum-accurate physical simulations. However, uMLIP training requires second-order derivatives, which lack corresponding parallel training frameworks; moreover, scaling to the billion-parameter regime causes explosive growth in computation and communication overhead, making its training a tremendous challenge. We introduce MatRIS-MoE, a billion-parameter Mixture-of-Experts model built upon invariant architecture, and Janus, a pioneering high-dimensional distributed training framework for uMLIPs with hardware-aware optimizations. Deployed across two Exascale supercomputers, our code attains a peak performance of 1.2/1.0 EFLOPS (24%/35.5% of theoretical peak) in single precision at over 90% parallel efficiency, compressing the training of billion-parameter uMLIPs from weeks to hours. This work establishes a new high-water mark for AI-for-Science (AI4S) foundation models at Exascale and provides essential infrastructure for rapid scientific discovery.",
      abstractSource: "https://arxiv.org/abs/2604.15821",
      image: "assets/publications/janus.png",
      imageAlt: "MatRIS-MoE accuracy across molecular, materials, catalysis, molecular crystal, and MOF benchmarks.",
      imageCaption: "MatRIS-MoE · cross-domain benchmarks",
      arxiv: "https://arxiv.org/abs/2604.15821",
      pdf: "https://arxiv.org/pdf/2604.15821",
      code: "",
      project: ""
    },
    {
      title: "MatRIS: Toward Reliable and Efficient Pretrained Machine Learning Interatomic Potentials",
      authors: ["Yuanchang Zhou", "Siyu Hu", "Xiangyu Zhang", "Hongyu Wang", "Guangming Tan", "Weile Jia"],
      venue: "ICLR",
      year: "2026",
      preprint: false,
      abstract: "Foundation MLIPs demonstrate broad applicability across diverse material systems and have emerged as a powerful and transformative paradigm in chemical and computational materials science. Equivariant MLIPs achieve state-of-the-art accuracy in a wide range of benchmarks by incorporating equivariant inductive bias. However, the reliance on tensor products and high-degree representations makes them computationally costly. This raises a fundamental question: as quantum mechanical-based datasets continue to expand, can we develop a more compact model to thoroughly exploit high-dimensional atomic interactions? In this work, we present MatRIS (Materials Representation and Interaction Simulation), an invariant MLIP that introduces attention-based modeling of three-body interactions. MatRIS leverages a novel separable attention mechanism with linear complexity O(N), enabling both scalability and expressiveness. MatRIS delivers accuracy comparable to that of leading equivariant models on a wide range of popular benchmarks (Matbench-Discovery, MatPES, MDR phonon, Molecular dataset, etc). Taking Matbench-Discovery as an example, MatRIS achieves an F1 score of up to 0.847 and attains comparable accuracy at a lower training cost. The work indicates that our carefully designed invariant models can match or exceed the accuracy of equivariant models at a fraction of the cost, shedding light on the development of accurate and efficient MLIPs.",
      abstractSource: "https://arxiv.org/abs/2603.02002",
      image: "assets/publications/matris.png",
      imageAlt: "Training time and Matbench-Discovery F1 score comparison for MatRIS and other foundation interatomic potentials.",
      imageCaption: "MatRIS · accuracy and training efficiency",
      arxiv: "https://arxiv.org/abs/2603.02002",
      pdf: "https://arxiv.org/pdf/2603.02002",
      code: "https://github.com/HPC-AI-Team/MatRIS",
      project: ""
    },
    {
      title: "Exploring Landscapes for Better Minima along Valleys",
      authors: ["Tong Zhao", "Jiacheng Li", "Yuanchang Zhou", "Guangming Tan", "Weile Jia"],
      venue: "NeurIPS",
      year: "2025",
      preprint: false,
      abstract: "Finding lower and better-generalizing minima is crucial for deep learning. However, most existing optimizers stop searching the parameter space once they reach a local minimum. Given the complex geometric properties of the loss landscape, it is difficult to guarantee that such a point is the lowest or provides the best generalization. To address this, we propose an adaptor \"E\" for gradient-based optimizers. The adapted optimizer tends to continue exploring along landscape valleys (areas with low and nearly identical losses) in order to search for potentially better local minima even after reaching a local minimum. This approach increases the likelihood of finding a lower and flatter local minimum, which is often associated with better generalization. We also provide a proof of convergence for the adapted optimizers in both convex and non-convex scenarios for completeness. Finally, we demonstrate their effectiveness in an important but notoriously difficult training scenario, large-batch training, where Lamb is the benchmark optimizer. Our testing results show that the adapted Lamb, ALTO, increases the test accuracy (generalization) of the current state-of-the-art optimizer by an average of 2.5% across a variety of large-batch training tasks. This work potentially opens a new research direction in the design of optimization algorithms.",
      abstractSource: "https://arxiv.org/abs/2510.27153",
      image: "assets/publications/valleys.png",
      imageAlt: "Optimizer trajectories on a cardioid-shaped loss valley, comparing SGD and Adam with their adapted variants.",
      imageCaption: "Valley exploration · optimizer trajectories",
      conferenceUrl: "https://openreview.net/forum?id=XxRKqFsvoK",
      arxiv: "https://arxiv.org/abs/2510.27153",
      pdf: "https://arxiv.org/pdf/2510.27153",
      code: "https://github.com/zhaotong94/E",
      project: ""
    },
    {
      title: "FastCHGNet: Training one Universal Interatomic Potential to 1.5 Hours with 32 GPUs",
      authors: ["Yuanchang Zhou", "Siyu Hu", "Chen Wang", "Lin-Wang Wang", "Guangming Tan", "Weile Jia"],
      venue: "IPDPS",
      year: "2025",
      preprint: false,
      abstract: "Graph neural network universal interatomic potentials (GNN-UIPs) have demonstrated remarkable generalization and transfer capabilities in material discovery and property prediction. These models can accelerate molecular dynamics (MD) simulation by several orders of magnitude while maintaining ab initio accuracy, making them a promising new paradigm in material simulations. One notable example is Crystal Hamiltonian Graph Neural Network (CHGNet), pretrained on the energies, forces, stresses, and magnetic moments from the MPtrj dataset, representing a state-of-the-art GNN-UIP model for charge-informed MD simulations. However, training the CHGNet model is time-consuming(8.3 days on one A100 GPU) for three reasons: (i) requiring multi-layer propagation to reach more distant atom information, (ii) requiring second-order derivatives calculation to finish weights updating and (iii) the implementation of reference CHGNet does not fully leverage the computational capabilities. This paper introduces FastCHGNet, an optimized CHGNet, with three contributions: Firstly, we design innovative Force/Stress Readout modules to decompose Force/Stress prediction. Secondly, we adopt massive optimizations such as kernel fusion, redundancy bypass, etc, to exploit GPU computation power sufficiently. Finally, we extend CHGNet to support multiple GPUs and propose a load-balancing technique to enhance GPU utilization. Numerical results show that FastCHGNet reduces memory footprint by a factor of 3.59. The final training time of FastCHGNet can be decreased to 1.53 hours on 32 GPUs without sacrificing model accuracy.",
      abstractSource: "https://arxiv.org/abs/2412.20796",
      image: "assets/publications/fastchgnet.png",
      imageAlt: "CHGNet workflow showing crystal inputs, graph representations, and energy, force, stress, and magnetic moment predictions.",
      imageCaption: "FastCHGNet · interatomic potential workflow",
      arxiv: "https://arxiv.org/abs/2412.20796",
      pdf: "https://arxiv.org/pdf/2412.20796",
      code: "",
      project: ""
    }
  ],

  // Awards supplied by the homepage owner, grouped by stage.
  // Leave year empty for honors whose dates have not been provided.
  awards: [
    { stage: "Graduate Studies", year: "2025", title: "National Scholarship" },
    { stage: "Graduate Studies", year: "2024", title: "Shuguang Scholarship" },
    { stage: "Graduate Studies", year: "", title: "Merit Student, First-Class Scholarship, etc." },
    { stage: "Undergraduate Studies", year: "2023", title: "Beijing Outstanding Graduate" },
    { stage: "Undergraduate Studies", year: "2020", title: "National Scholarship" },
    { stage: "Undergraduate Studies", year: "", title: "Merit Student, First-Class Scholarship, etc." }
  ],

  // Reviewing appointments supplied by the homepage owner.
  services: [
    { year: "2026", venue: "NeurIPS", role: "Reviewer" },
    { year: "2027", venue: "ICLR", role: "Reviewer" }
  ]
};
