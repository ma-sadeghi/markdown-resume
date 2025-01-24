# Curriculum Vitae

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" type="text/css" href="resume.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">

<span class="name">Mohammad Amin Sadeghi</span>

<span class="info">
  <a href="mailto:amin.sadeghi@uwaterloo.ca"><i class="fas fa-envelope"></i> amin.sadeghi@uwaterloo.ca</a> |
  <a href="https://github.com/ma-sadeghi"><i class="fab fa-github"></i> GitHub</a> |
  <a href="https://www.linkedin.com/in/sadeghiamin/"><i class="fab fa-linkedin"></i> LinkedIn</a> |
  <a href="https://ma-sadeghi.github.io"><i class="fas fa-home"></i> Homepage</a>
</span>

## Summary

- PhD in Chemical Engineering with a focus on modeling, simulation, and data analytics.
- 10+ years of experience in modeling & simulation, machine learning, and software development.
- Strong project management skills with track record of leading and contributing to cross-functional teams.

## Relevant Experience

### AI Computational Developer <time> 2024 – Present </time>

<location> Computational Materials Engineering, [CanmetMATERIALS](https://natural-resources.canada.ca/research-centres-and-labs/canmetmaterials/22096) – Natural Resources Canada </location>

- Developed a long short term memory (LSTM) time series model to predict Li-ion battery degradation from impedance spectroscopy (EIS) measurements. (NumPyro, PyTorch)
- Designed an active learning end-to-end battery cycling workflow for automated data acquisition, analysis, and model retraining using Bayesian optimization. (NumPyro, JAX)
- Developed a Python interface for automated control and data acquisition from [BioLogic potentiostats](https://www.biologic.net/potentiostat-galvanostat).

<hr style="height:0.5px; border:none; background-color:lightgray;" />

### Postdoctoral Fellow <time> 2023 – 2024 </time>

<location> [Department of Materials Science and Engineering](https://mse.utoronto.ca), University of Toronto </location>

- Developed AutoEIS, a Python package for automated analysis of EIS data using genetic algorithms and Bayesian inference. (NumPyro, Julia, JAX)
- Designed, implemented and deployed an EIS processing and visualization dashboard, improving processing efficiency and enabling real-time insights. (Streamlit, Nginx)
- Designed, implemented and deployed a parallelized workflow to collect, process and analyze large-scale EIS datasets on Compute Canada HPC clusters. (SLURM, Shell, [MPIRE](https://github.com/sybrenjansen/mpire))

<hr style="height:0.5px; border:none; background-color:lightgray;" />

### Postdoctoral Fellow <time> 2019 – 2023 </time>

<location> [Department of Chemical Engineering](https://uwaterloo.ca/chemical-engineering), University of Waterloo </location>

- Developed a physics-informed convolutional neural network (CNN) to compute the tortuosity of voxel images, up to 1000x faster than physics-based solvers, e.g., FEM, LBM, etc. (PyTorch)
- Implemented a distributed data pipeline to generate a large-scale dataset to train a physics-informed CNN for tortuosity estimation. (Dask, Ray)
- Implemented a convolutional autoencoder to simulate Li-ion battery discharge, 10x faster than COMSOL, to enhance automated screening of electrode microstructures. (TensorFlow, COMSOL)
- Developed reduced order digital twins for various electrochemical systems (e.g., hydrogen fuel cells, electrolyzers) to accelerate in-silico material screening. (SciPy Stack, [OpenPNM](https://openpnm.org), [PoreSpy](https://porespy.org))
- Led a team of 10+ developers through the software development lifecycle, enhancing code quality through rigorous code reviews and streamlining deployment processes by implementing CI/CD pipelines. Maintained and deployed the team's online resources on GitHub and AWS.

<hr style="height:0.5px; border:none; background-color:lightgray;" />

### Research Intern <time> Fall 2018 </time>

<location> Object Research Systems (ORS) </location>

- Developed a plugin for [Dragonfly](https://dragonfly.comet.tech)<sup>1</sup> to extract pore networks from 3D images of porous materials. (PyQt)
- Learned GUI development using Qt from scratch and delivered a production-quality plugin within 2 months, leading to Dragonfly's market expansion from medical imaging to rock sciences.

<!-- <hr style="height:0.5px; border:none; background-color:lightgray;" /> -->

### Research Assistant <time> 2015 – 2019 </time>

<location> [Department of Chemical Engineering](https://www.mcgill.ca/chemeng), McGill University </location>

- Developed a reduced order model for HBr flow batteries; enabling 100x more througput for optimizing the microstructure while maintaining accuracy. (Python, OpenPNM)
- Developed OpenPNM, a Python package for reduced order modeling of transport in porous media, providing up to 1000x speedup over FEM, LBM, etc. with minimal loss of accuracy.
- Developed PoreSpy, a Python package for image processing of porous media, providing a comprehensive suite of tools for image segmentation, analysis, and visualization.
- Designed and implemented distributed CI/CD pipelines for OpenPNM and PoreSpy, reducing testing time by 80%, leading to more frequent releases and higher code quality.
<!-- - Developed a multiscale model for hierarchical nanocatalysts, elucidating structure-performance interplay. -->
<!-- - Devised a novel discretization for advection in network models, up to 4x more accurate than existing methods. -->

<hr style="height:0.5px; border:none; background-color:lightgray;" />

### Research Assistant <time> 2012 – 2015 </time>

<location> [Department of Chemical Engineering](https://www.che.sharif.edu/en), Sharif University of Technology </location>

- Developed a multiphysics CFD model using COMSOL to simulate reactive flow in catalytic converters, exploring the interplay between cell shape and performance.
- Utilized MATLAB LiveLink API to automate COMSOL model development, creating a fully automated workflow for optimizing CO2/NOx removal in catalytic converters.

<!-- Footnotes begin -->

<hr style="height:0.5px; border:none; background-color:lightgray;" />
<div class="footnote">
  <sup>1</sup> Scientific image processing software developed by ORS (acquired by <a href="https://comet.tech">Comet</a>)
</div>

<!-- Footnotes end -->

## Skills

### Technical Skills

- **Parallel/GPU Programming:** Working knowledge of OpenMP, MPI, CUDA, Numba, CuPy for parallel/GPU computing; and Dask, Ray for scalable data processing and model training.

- **Image Processing & Visualization:** Working knowledge of Scikit-Image, OpenCV. Proficient in data visualization with Matplotlib, Plotly, Seaborn, and ParaView.

- **Data Science & Analysis:** Proficient in NumPy, SciPy, Pandas, Scikit-Learn. Familiar with databases (SQL, NoSQL) e.g., MySQL, MongoDB, and big data technologies like Apache Spark.

- **Cloud Technologies:** Working knowledge of using and deploying on cloud services e.g., Google Cloud and AWS. Experience with SLURM scheduling in HPC clusters.

- **Programming & Software Development:** Working knowledge of version control (Git, Perforce), debugging, and testing. Proficient in Python, C/C++, Julia, MATLAB. Experience with full-stack development using HTML/CSS/JavaScript, and frameworks e.g., Django and Flask. Good understanding of object-oriented programming, design patterns, data structures, and algorithms. Working knowledge of software testing, CI/CD pipelines, and containerization (Docker, Kubernetes).

- **Machine Learning & AI:** Working knowledge of PyTorch, JAX, TensorFlow. Experienced in building and tuning large-scale, distributed machine learning models.

<hr style="height:0.5px; border:none; background-color:lightgray;" />

### Advanced Knowledge

- **Mathematical & Computational Modeling:** Proficient in scientific computing, solving differential equations using FEM, FVM, FDM. Familiar with the Lattice Boltzmann method (LBM). Working knowledge of linear, nonlinear, and stochastic optimization techniques. Working knowledge of Bayesian inference and probabilistic programming.

- **Machine Learning Techniques:** Working knowledge of supervised and unsupervised learning. Working knowledge of deep learning methods, e.g., convolutional and recurrent neural networks. Familiar with reinforcement learning. Working knowledge of data cleaning, feature engineering, and working with large datasets. Working knowledge of model reduction techniques e.g., PCA, UMAP, etc. Working knowledge of physics-informed machine learning, e.g,. physics-informed neural networks, and neural operators.

- **Engineering & Simulation:** Deep understanding of thermodynamics, fluid mechanics, transport phenomena, and reaction kinetics. Working knowledge of technical drawing and simulation software, e.g., COMSOL Multiphysics, AutoCAD, and Aspen HYSYS.

<hr style="height:0.5px; border:none; background-color:lightgray;" />

### Soft Skills

- **Project Management**
  - Led the development of popular open-source libraries, managing a team of over 10 developers and successfully delivering major releases.
  - Managed multiple cross-functional projects concurrently, consistently meeting deadlines and milestones.
  - Supervised and mentored undergrad/grad students, leading to successful outcomes, e.g., publications.
- **Community Engagement**
  - Actively engaged with the user community to address issues and feature requests for various open-source projects, significantly growing user base and satisfaction.
  - Led workshops, tutorials, and coding clubs to promote open-source development and foster collaboration.
- **Technical Communication**
  - Secured ongoing funding for the development of OpenPNM and PoreSpy through effective communication with non-technical stakeholders and funding agencies.
  - Authored and co-authored over 20 peer-reviewed journal articles and conference papers.
  - Presented research findings at more than 20 international conferences and workshops.

## Open-Source Software

### [OpenPNM](https://github.com/PMEAL/OpenPNM) (400+ stars, 350+ citations)

- Python library for performing pore network modeling of porous media.
- Led development of the second and third major releases.

### [PoreSpy](https://github.com/PMEAL/porespy) (250+ stars, 250+ citations)

- Python library for characterizing and analyzing 2D/3D images of porous materials.
- Led development of the second major release.

### [AutoEIS](https://github.com/AUTODIAL/AutoEIS) (20+ stars, under review at JOSS)

- Python library for automated analysis of electrochemical impedance spectroscopy (EIS) data.
- Led development of the first major release.

### [Tortuosity.jl](https://github.com/ma-sadeghi/Tortuosity.jl) 

- Julia package (+ Python wrapper) for computing tortuosity from voxel images.
<!-- - Implemented multithreading and GPU support, up to 100x faster than SOTA<sup>1</sup> competitors (e.g., [PuMA](https://github.com/nasa/puma) by NASA) and up to 5x faster than the SOTA GPU implementation ([TauFactor](https://github.com/taufactor/taufactor)) -->

### [TauNet](https://github.com/ma-sadeghi/TauNet) (repo private until paper published)

- Python package for rapid estimation of tortuosity from voxel images using physics-informed CNNs.
- Demonstrated up to 1000x speedup over the SOTA<sup>1</sup> physics-based solvers on various datasets.

<!-- Footnotes begin -->

<hr style="height:0.5px; border:none; background-color:lightgray;" />
<div class="footnote">
  <sup>1</sup> State of the Art
</div>

<!-- Footnotes end -->

## Education

### McGill University | <location> Montreal, Canada </location> <time> 2015 – 2019 </time>

- Ph.D. in Chemical Engineering
- Thesis: Role of electrode microstructure on battery performance using computational modeling

### Sharif University of Technology | <location> Tehran, Iran </location> <time> 2012 – 2015 </time>

- M.S. in Chemical Engineering
- Thesis: CFD-aided modeling and shape optimization of CO2/NOx catalytic converters

### Sharif University of Technology | <location> Tehran, Iran </location> <time> 2008 – 2012 </time>

- B.S. in Chemical Engineering
- Graduating Dean’s Honors List

## Leadership

### University of Toronto <time> 2017 – 2023 </time>

*Co-Supervisor*

- Sara Shi: <span class="title"> Predicting remaining useful life of Li-ion batteries using impedance spectroscopy </span> (PhD, 2023)

### University of Waterloo <time> 2017 – 2023 </time>

*Co-Supervisor*

- Ricky Fan: <span class="title"> Estimation of Tortuosity of Large Images using Domain Decomposition </span> (BSc, 2023)
- Sam Ly: <span class="title"> Modeling of the State of Lithiation in Li-Ion Batteries via Autoencoders </span> (MSc, 2023)
- Mike McKague: <span class="title"> Parallelized Network Extraction from Voxel Images using Medial Axis </span> (PhD, 2022)
- Niloo Misaghian: <span class="title"> Pore Network Modeling of Zinc-Air Batteries </span> (PhD, 2022)
- Mike McKague: <span class="title"> Pore Network Modeling of Physical Adsorption in Porous Media </span> (MSc, 2020)

### Sharif Computer-Aided Chemical Engineering Contest (SC<sub>3</sub><sup>1</sup>) <time> 2012 – 2015 </time>

*Founder, President (3x)*

- Chaired the scientific committee responsible for designing problem sets.
- Secured sponsorship and oversaw executive tasks.
- Grew the competition from 15 to 300+ participants in 3 years.

<!-- Footnotes begin -->

<hr style="height:0.5px; border:none; background-color:lightgray;" />
<div class="footnote">
  <sup>1</sup> A nationwide programming competition for chemical engineering students in Iran
</div>

<!-- Footnotes end -->

## Manuscripts Under Review/Preparation

- **Sadeghi, M.A.**, Ly, S., and Gostick, J.T. (2024) <span class="title">TauNet: An interpretable deep learning framework for rapid estimation of tortuosity from voxel images.</span> To be submitted to *npj Computational Materials*.

- **Sadeghi, M.A.**, and Gostick, J.T. (2024) <span class="title">Estimation of tortuosity of tomograms using a GPU-accelerated transient Laplace solver.</span> To be submitted to *Computers & Geosciences*.

## Peer-Reviewed Publications

- Ly, S., **Sadeghi, M.A.**, Misaghian, N., Fathiannasab, H., and Gostick, J. (2024) <span class="title">Rapid prediction of particle-scale state-of-lithiation in Li-ion battery microstructures using convolutional neural networks.</span> *Applied Energy*, 360, p.122803.

- Bell, E., Morris, D., **Sadeghi, M.A.**, and Gostick, J. (2024) <span class="title">BEaTmap: Simplified Rigorous BET Analysis of Isothermal Adsorption Data.</span> *Journal of Open Research Software*, 12(1).

- **Sadeghi, M.A.**, Khan, Z.A., Agnaou, M., Hu, L., Litster, Gostick, J. (2023) <span class="title">Predicting PEMFC performance from a volumetric image of catalyst layer structure using pore network modeling.</span> *Applied Energy*, 353, p.122004.

- Misaghian, N., **Sadeghi, M.A.**, and Gostick, J.T. (2023) <span class="title">Utilizing pore network modeling for performance analysis of multi-layer electrodes in vanadium redox flow batteries.</span> *Journal of The Electrochemical Society*, 170 (7), 070520.

- van Gorp, R., van der Heijden, M., **Sadeghi, M.A.**, Gostick, J., Forner-Cuenca, A. (2023) <span class="title">Bottom-up design of porous electrode by combining a genetic algorithm and a pore network model.</span> *Chemical Engineering Journal*, p.139947.

- Misaghian, N., **Sadeghi, M.A.**, Roberts, E., Gostick, J. (2022) <span class="title">Investigating the role of the triple-phase boundary in zinc-air cathodes using pore network modeling.</span> *Journal of The Electrochemical Society*, 169(10), p.100549.

- Amini, K., **Sadeghi, M.A.**, Pritzker, M., Gostick, J. (2022) <span class="title">Porous electrodes in redox flow batteries.</span> *Encyclopedia of Energy Storage*; Cabeza, L. F., Ed.; Elsevier: Oxford, 2022; pp 466–479.

- McKague, M., Fathiannasab, H., Agnaou, M., **Sadeghi, M.A.**, and Gostick, J. (2022) <span class="title">Extending pore networks to include electrical double layer effects in micropores for capacitive deionization.</span> *Desalination*, 535, p.115784.

- Misaghian, N., Agnaou, M., **Sadeghi, M.A.**, Fathiannasab, H., Hadji, I., and Gostick, J. (2022) <span class="title">Prediction of diffusional conductance in network models using convolutional neural networks.</span> *Computers & Geosciences*, 162, p.105086.

- van der Heijden, M., Van Gorp, R., **Sadeghi, M.A.**, Gostick, J., and Forner-Cuenca, A. (2022) <span class="title">Assessing the versatility of network modeling to simulate flow battery performance.</span> *Journal of The Electrochemical Society*, 169(4), p.040505.

- Khan, Z., Agnaou, M., **Sadeghi, M.A.**, Elkamel, A., Gostick, J. (2021) <span class="title">Pore network modelling of galvanostatic discharge behavior of lithium-ion battery cathodes.</span> *Journal of The Electrochemical Society*, 168(7), 070534.

- Pourali, M., Esfahani, J.A., **Sadeghi, M.A.**, Kim, K.C., Gostick, J. (2021) <span class="title">Simulation of steam reforming in a catalytic micro-reactor using an analytical approach.</span> *International Journal of Hydrogen Energy*, 46(44), pp.22763-22776.

- Agnaou, M., **Sadeghi, M.A.**, Tranter, T.G., Gostick, J. (2020) <span class="title">Modeling transport of charged species in pore networks: solution of the Nernst-Planck equations coupled with fluid flow.</span> *Computers & Geosciences*, p.104505.

- **Sadeghi, M.A.**, Agnaou, M., Barralet, J., Gostick, J. (2020) <span class="title">Dispersion in pore networks: A comparison of common models and alternative approaches.</span> *Journal of Contaminant Hydrology*, 228, p.103578.

- Tavakolian, M., Wiebe, H., **Sadeghi, M.A.**, and van de Ven, T.G. (2019) <span class="title">Dye removal using hairy nanocellulose: experimental and theoretical investigations.</span> *ACS Applied Materials & Interfaces*, 12(4), pp.5040-5049.

- Zhang, Z., **Sadeghi, M.A.**, Jervis, R., Ye, S., Gostick, J., Barralet, J.E., Merle, G. (2019) <span class="title">Tailoring carbon nanotube microsphere architectures with controlled porosity.</span> *Advanced Functional Materials*, 29(42), p.1903983.

- **Sadeghi, M.A.**, Agnaou, M., Kok, M., Aghighi, M., Gostick, J. (2019) <span class="title">Exploring the impact of microstructure on flow battery performance using a multiphysics network model.</span> *Journal of The Electrochemical Society*, 166(10), p.A2121.

- Gostick, J.T., Khan, Z.A., Tranter, T.G., Kok, M.D., Agnaou, M., **Sadeghi, M.**, and Jervis, R. (2019) <span class="title">PoreSpy: a python toolkit for quantitative analysis of porous media images.</span> *The Journal of Open Source Software*, 4(37), p.1296.

- Kok, M.D., Jervis, R., Tranter, T.G., **Sadeghi, M.A.**, Brett, D.J.L, Shearing, P.R., Gostick, J. (2019) <span class="title">Mass transfer in fibrous media with varying anisotropy for flow battery electrodes.</span> *Chemical Engineering Science*, 196, pp.104-115.

- **Sadeghi, M.**, Aghighi, M., Barralet, J., Gostick, J. (2017) <span class="title">Pore network modeling of transport in hierarchical porous particles: the effects of microstructure.</span> *Chemical Engineering Journal*, 330, pp.1002-1011.

- **Sadeghi, M.**, Salami, H., Taghikhani, V., Robert, M.A. (2015) <span class="title">A comprehensive study on CO2 solubility in brine: Thermodynamic and neural network modeling.</span> *Fluid Phase Equilibria*, 403, pp.153-159.

## Conference Presentations

- McKague, M.G., **Sadeghi, M.A.** and Gostick, J. (2024). <span class="title">Pore network modelling of a lithium ion battery cathode as a tool for microstructure optimization</span>. In Electrochemical Society Meeting Abstracts 245 (No. 5, pp. 730-730). The Electrochemical Society, Inc..

- van der Heijden, M., **Sadeghi, M.A.**, Gostick, J., Forner-Cuenca, A. (2023) <span class="title">Starting from the bottom: Coupling a genetic algorithm and a network model for porous electrode optimization.</span> 15th Annual Interpore Meeting, Edinburgh, UK.

- **Sadeghi, M.A.**, Khan, Z.A., Agnaou, M., Gostick, J. (2022) <span class="title">Predicting the performance of PEMFC by just looking at an image!</span> 4th Annual CREATE and Use Hydrogen, Calgary, Canada.

- **Sadeghi, M.A.**, Khan, Z.A., Agnaou, M., Gostick, J. (2022) <span class="title">Pore-scale modeling of multiphysics and multiphase transport in porous electrode components.</span> Gordon Research Conference, Fuel Cells, Smithfield, United States.

- **Sadeghi, M.A.**, Gostick, J. (2022) <span class="title">From pydns to DNS.jl: How we translated our Python package to Julia.</span> 4th Annual Canadian Research Software Conference (CRSC), Montreal, Canada.

- **Sadeghi, M.A.**, Gostick, J. (2022) <span class="title">DNS.jl: a finite-difference transient diffusion solver for tomography images.</span> 4th Annual Canadian Research Software Conference (CRSC), Montreal, Canada.

- Misaghian, N., Agnaou, M., **Sadeghi, A.**, Fathiannasab, H., Gostick, J. (2021) <span class="title">Utilizing deep learning to predict diffusional conductance in network models.</span> 71st Canadian Chemical Engineering Conference, Montreal, Canada.

- **Sadeghi, M.A.**, Gostick, J. (2021) <span class="title">How we automated our software development cycle using GitHub Actions.</span> 3rd Annual Canadian Research Software Conference (CRSC), Virtual.

- **Sadeghi, M.A.**, Gostick, J. (2021) <span class="title">Rapid estimation of effective diffusivity using a GPU-accelerated transient finite-difference solver.</span> 3rd Annual Canadian Research Software Conference (CRSC), Virtual.

- **Sadeghi, M.A.**, Khan, Z.A., Agnaou, M., Litster, S., Gostick, J. (2021) <span class="title">Multiphysics multiscale modeling of fuel cell catalyst layer: a pore network modeling study.</span> 13th Annual Interpore Meeting, Virtual.

- Aggarwal, C., **Sadeghi, M.A.**, Monte, E., Lowman, J., Gostick, J., Abukhdeir, N.M. (2021) <span class="title">Determination of characteristic transport coeff. of porous media: A diffuse interface approach.</span> 13th Annual Interpore Meeting, Virtual.

- McKague, M., Fathiannasab, H., Agnaou, M., **Sadeghi, M.A.** and Gostick, J. (2021) <span class="title">Application of Helmholtz electric double layer theory in a pore network model for capacitive deionization.</span> 13th Annual Interpore Meeting, Virtual.

- v/d Heijden, M., van Gorp, R., Szendrei, G., **Sadeghi, A.**, Gostick, J., Broneman, Z., Forner-Cuenca, A. (2021) <span class="title">Towards bottom-up design of porous electrode micro-structures: Coupling genetic algorithms with pore network modeling of redox flow battery electrodes.</span> 13th Annual Interpore Meeting, Virtual.

- Agnaou, M., **Sadeghi, M.A.**, Gostick, J.T. (2019) <span class="title">Simulation of multiphysics processes: A pore network modeling approach for ions transport.</span> 2nd Annual Canadian Research Software Conference (CRSC), Montreal, Canada.

- Wiebe, H., Tavakolian, M., **Sadeghi, M.A.**, van de Ven, T.G.M. (2019) <span class="title">Dye removal using hairy nanocellulose.</span> Quebec Center for Advanced Materials, Student Symposium, Montreal, Canada.

- **Sadeghi, M.A.**, Barralet, J., Gostick, J.T. (2018) <span class="title">Nanoscale digital reconstruction of the fuel cell catalyst layer and measurement of eff. properties.</span> 68th Canadian Chemical Engineering Conference, Toronto, Canada.

- **Sadeghi, M.A.**, Barralet, J., Gostick, J. T. (2018) <span class="title">Modeling of dispersion in porous media: derivation of accurate pore network models.</span> 68th Canadian Chemical Engineering Conference, Toronto, Canada.

- **Sadeghi, M.A.**, Barralet, J., Gostick, J. T. (2018) <span class="title">Pore network reconstruction and simulation of the fuel cell catalyst layer.</span> 234th Meeting of The Electrochemical Society, Cancun, Mexico.

- Agnaou, M., **Sadeghi, A.**, Gostick, J. (2018) <span class="title">Multiphysics simulation using OpenPNM: A highly accurate transient dispersion solver.</span> 1st Annual Canadian Research Software Conference (CRSC), Ottawa, Canada.

- **Sadeghi, M.A.**, Barralet, J., Gostick, J. T. (2018) <span class="title">Investigating structure-performance of catalyst layers with network modeling.</span> Gordon Research Conference: Fuel Cells, Smithfield, United States.

- **Sadeghi, M.A.**, Barralet, J., Gostick, J. T. (2018) <span class="title">The impact of electrode pore structure on redox flow battery performance.</span> 10th Annual Interpore Meeting, New Orleans, USA.

- Zhang, Z., **Sadeghi, M.A.**, Gostick, J.T., Barralet, J. (2018) <span class="title">Oxide-anchored, carbide-supported Pt nanoparticles for oxygen reduction reaction.</span> Materials Research Society Spring Meeting & Exhibit, Phoenix, USA.

- Zhang, Z., **Sadeghi, M.A.**, Gostick, J.T., Barralet, J. (2018) <span class="title">Core-shell structured carbide catalysts for oxygen reduction reaction.</span> 8th Electrochemical Society Montreal Student Chapter Symposium, Montreal, Canada.

- Zhang, Z., **Sadeghi, M.A.**, Gostick, J.T., Barralet, J. (2018) <span class="title">Carbide core-shell structures for oxygen reduction reaction.</span> 4th International NanoTech and NanoScience Conference & Exhibition, Paris, France.

- **Sadeghi, M.A.**, Aghighi, M., Barralet, J., Gostick, J.T. (2017) <span class="title">Hierarchical materials to the rescue, or how to use hierarchy of porosity to maximize catalytic activity.</span> 67th Canadian Chemical Engineering Conference, Edmonton, Canada.

- **Sadeghi, M.A.**, Aghighi, M., Gostick, J.T. (2017) <span class="title">The interplay between pore structure and electrode performance: a pore-network modeling study.</span> 67th Canadian Chemical Engineering Conference, Edmonton, Canada.

- **Sadeghi, M.A.**, Aghighi, M., Barralet, J., Gostick, J.T. (2017) <span class="title">Modelling diffusion and reaction in hierarchical porous media with OpenPNM.</span> 9th Annual Interpore Meeting, Delft, Netherlands.

- **Sadeghi, M.A.**, Aghighi, M., Barralet, J., Gostick, J.T. (2016) <span class="title">Pore-scale modeling of transport in a catalyst particle with a hierarchy of porosity.</span> 66th Canadian Chemical Engineering Conference, Quebec City, Canada.

- **Sadeghi, M.A.**, Salami, H., Taghikhani, V. (2012) <span class="title">Modeling of CO2 solubility in brine by using neural networks.</span> 5th EAGE International Conference and Exhibition on Geosciences, Saint Petersburg, Russia.

## Awards

### 1<sup>st</sup> prize, Best Oral Presentation | <location> 4<sup>th</sup> Annual CREATE and Use Hydrogen Conference </location> <time> 2022 </time>

### 3<sup>rd</sup> prize, Best Poster Award | <location> 3<sup>rd</sup> Annual Canadian Research Software Conference </location> <time> 2021 </time>

### 1<sup>st</sup> prize, Best Poster Award | <location> 2<sup>nd</sup> Annual Canadian Research Software Conference </location> <time> 2019 </time>

### 1<sup>st</sup> prize, Best Poster Award | <location> 1<sup>st</sup> Annual Canadian Research Software Conference </location> <time> 2018 </time>

### 2<sup>nd</sup> prize, Three Minute Thesis (3MT) | <location> Canadian Society for Chemical Engineers </location> <time> 2017 </time>

### Graduate Excellence Fellowship | <location> McGill University </location> <time> 2016 </time>

### McGill Engineering International Tuition Award | <location> McGill University </location> <time> 2015 </time>

### Scholarship for Summer Internship | <location> TÜM, NanoSystems Initiative Munich </location> <time> 2014 </time>

### 2<sup>nd</sup> prize, Best BSc Thesis Award | <location> Iranian Institute of Chemical Engineers </location> <time> 2013 </time>

### International Travel Grant | <location> 5<sup>th</sup> EAGE International Conference on Geosciences </location> <time> 2012 </time>

## Community Service

### Coding Club Mentor | <location> Independent </location> <time> 2023 - now </time>

- Led a group of graduate students, postdocs, and research scientists in weekly coding sessions to teach best practices in software development and data analysis.

### Journal/Conference Reviewer

<!-- - Reviewed submissions for the 5<sup>th</sup> Annual Research Software Engineers Conference (SeptembRSE) <time> 2021 </time> -->
- Peer reviewed articles for prominent journals including *Angewandte Chemie, Journal of Power Sources, Advances in Water Resources, Transport in Porous Media, Journal of Petroleum Science and Engineering, The Journal of Open Source Software* <time> 2019 - now </time>

### Student Society Member | <location> McGill University </location> <time> 2018 - 2019 </time>

- Designed the first prototype of the Chemical Engineering Graduate Student Society website.

### IT Officer | <location> McGill University </location> <time> 2018 </time>

- Developed an online polling platform for People’s Choice award in Chemical Engineering Research Day, enhancing participant engagement.

### Scientific Committee Member | <location> McGill University </location> <time> 2018 </time>

- Evaluated student posters for the Summer Undergraduate Research in Engineering competition.

### Workshop Instructor | <location> Sharif University of Technology </location> <time> 2018 </time>

- Conducted workshops on MATLAB 101, Writing Effective Resumes and Statements of Purpose, and Succeeding in TOEFL and GRE Exams.

### Student Society Member | <location> Sharif University of Technology </location> <time> 2012 - 2015 </time>

- Served as a columnist for the Chemical Engineering Student Society weekly newsletter.

## Teaching Experience

### Sessional Lecturer | <location> University of Waterloo </location> <time> Summer 2023 </time>

- CHEE 614 Capillary and Transport Phenomena in Porous Media*<sup>1</sup>

### Guest Lecturer | <location> McGill University </location> <time> Fall 2018 </time>

- CHEE 662 Computational Methods*

### Teaching Assistant | <location> McGill University </location> <time> 2015 - 2019 </time>

- CHEE 662 Computational Methods* (Fall 2017-18)
- CHEE 641 Chemical Reaction Engineering* (Winter 2018)
- CHEE 440 Process Modeling (Winter 2016-18)
- CHEE 390 Computational Methods (Fall 2016)

### Teaching Assistant | <location> Sharif University of Technology </location> <time> 2012 - 2015 </time>

- CHEE 662 Computational Methods* (Fall 2017-18)
- CHEE 912 Process Modeling (Winter 2014)
- CHEE 323 Computational Methods (Winter 2012 & Fall 2014)
- CHEE 925 Heat Transfer (Winter 2013)
- CHEE 211 Fluid Mechanics (Fall 2013)
- CHEE 267 Advanced Numerical Methods* (Fall 2013)

<!-- Footnotes begin -->

<hr style="height:0.5px; border:none; background-color:lightgray;" />
<div class="footnote">
  <sup>1</sup> Courses marked with an asterisk (*) are graduate-level.
</div>

<!-- Footnotes end -->

<!-- Detail checks: 1. No period for each bullet; 2. Past tense for previous work; 3. Present tense for current work; 4. Spell check passed; 5. Grammarly check passed; 6. Sync with Linkedin; 7. Check paper format -->

<script src="resume.js" defer></script>
