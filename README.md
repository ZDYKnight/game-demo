# Bulk RNA-seq Analysis Learning Notes
<zdyknight.github.io/bulkRNA-tut/>

A professional, modern, and fully responsive static website serving as comprehensive learning notes for **Bulk RNA-seq data analysis**. This resource walks you through a complete, publication-ready pipeline—from raw FASTQ files to biologically meaningful insights.

## 🌟 Features

- **Fully Responsive Design** – Perfectly adapted for desktop, tablet, and mobile screens  
- **Elegant Dark Space Theme** – Immersive gradient background with subtle animated starfield  
- **Smooth User Experience** – Hover animations, smooth scrolling, and active section highlighting  
- **Interactive Code Blocks** – Clean syntax styling with one-click "Copy" button and success feedback  
- **Collapsible Accordions** – Organized code examples and detailed explanations  
- **Publication-Quality Figures** – Embedded representative images (heatmaps, volcano plots, PPI networks, enrichment results)  
- **Sticky Top Navigation** – Quick access to every pipeline stage  
- **Floating Outline Sidebar** – Scroll-aware active link highlighting for fast navigation  
- **Best-Practice Tips** – Guidance throughout to ensure reproducible, high-impact research  

## 🧬 Covered Pipeline Stages

1. **Quality Control** – FastQC + MultiQC  
2. **Read Alignment** – STAR (splice-aware)  
3. **Quantification** – featureCounts / Salmon  
4. **Data Import & Filtering** – DESeq2 setup  
5. **Differential Expression** – DESeq2 with LFC shrinkage  
6. **PPI Networks** – STRINGdb + igraph  
7. **KEGG Pathway Enrichment** – clusterProfiler  
8. **Gene Ontology (GO) Enrichment** – BP, MF, CC with simplification  
9. **Advanced Visualization** – EnhancedVolcano, pheatmap, etc.  
10. **Publication Best Practices** – Reproducibility, reporting standards  
11. **Advanced Topics**  
    - Batch effect correction (sva, ComBat-seq)  
    - Multi-omics functional integration (gprofiler2)  
    - Workflow automation (Snakemake example)  

## 📁 File Structure
```text
bulk-rnaseq-notes/
├── index.html     # Single-page application containing the full pipeline
├── style.css      # Custom dark theme, responsive layout, and visual enhancements
├── script.js      # Interactivity: copy code, sidebar, smooth scroll, scroll spy
└── README.md      # This documentation file
```


## 🚀 How to Use

1. Download or clone the project folder  
2. Open `index.html` in any modern web browser (no server required)  
3. Navigate using the top menu or the floating "Outline" button on the bottom-right  
4. Click any "Copy" button to instantly copy code snippets to your clipboard  
5. All images are loaded from reliable external sources—no local assets needed  

## 🛠 Technologies Used

- **HTML5** – Semantic, accessible markup  
- **CSS3** – Custom gradients, animations, Flexbox/Grid, responsive design  
- **Vanilla JavaScript** – Lightweight interactivity without frameworks  
- **Bootstrap 5** – Responsive grid, accordion components, mobile navbar  
- **Font Awesome** – Icons for visual clarity  
- **Google Fonts** – Roboto (text) + JetBrains Mono (code blocks)  
- **External Images** – Representative figures hosted on public domains  

## 🌐 Browser Compatibility

Fully tested and compatible with:

- Google Chrome  
- Mozilla Firefox  
- Safari  
- Microsoft Edge  
- Mobile browsers (iOS & Android)  

## 📝 Purpose

This project is intended as:

- A personal learning resource for Bulk RNA-seq analysis  
- A teaching aid for students, trainees, and workshops  
- A practical reference for researchers preparing manuscript-quality RNA-seq results  
- A demonstration of clean, maintainable front-end web development  

> **Note**: This is a learning and web-development demonstration project. The code examples follow established best practices, while figures are representative (not necessarily from the same dataset). Always validate and adapt pipelines to your specific data and experimental design.

Enjoy exploring the world of Bulk RNA-seq analysis! 🧬✨

Made with passion for bioinformatics — January 2026
