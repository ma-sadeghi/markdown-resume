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
- 8+ years of experience in modeling & simulation, machine learning, and software development.
- Strong project management skills with track record of leading and contributing to cross-functional teams.

## Relevant Experience

### Research Scientist <time> 2024 – Present </time>

<location> Computational Materials Engineering, CanmetMATERIALS – Natural Resources Canada </location>

- Developing machine learning (ML) models to predict Li-ion battery degradation from electrochemical impedance spectroscopy (EIS) measurements. (NumPyro, PyTorch, SciPy Stack)
- Developing automated battery cycling setup with ML in the loop for optimal generation of data points to maximally inform the ML model.

### Postdoctoral Fellow <time> 2023 – 2024 </time>

<location> Department of Materials Science and Engineering, University of Toronto </location>

- Developed AutoEIS: a tool for automated analysis of electrochemical impedance spectroscopy data using genetic algorithms and Bayesian inference. (NumPyro, Julia)

### Postdoctoral Fellow <time> 2019 – 2023 </time>

<location> Department of Chemical Engineering, University of Waterloo </location>

- Developed a physics-informed convolutional neural network to compute the tortuosity of voxel images, up to 1000x faster than physics-based solvers.
- Implemented a convolutional autoencoder to simulate Li-ion battery discharge, 10x faster than physics solvers, for rapid screening of electrode microstructures.
- Developed high-fidelity physics-based digital twins of various battery systems to maximize their performance.

### Research Intern <time> Fall 2018 </time>

<location> Object Research Systems (ORS) </location>

- Implemented a Dragonfly* plugin for pore network extraction from 3D images of porous materials. (PyQt)

### Research Assistant <time> 2015 – 2019 </time>

<location> Department of Chemical Engineering, McGill University </location>

- Developed a pore network model for flow batteries; uncovering how microstructure affects performance.
- Developed a multiscale model for hierarchical nanocatalysts, elucidating structure-performance interplay.
- Devised a novel discretization for advection in network models, up to 4x more accurate than existing methods.

### Research Assistant <time> 2012 – 2015 </time>

<location> Department of Chemical Engineering, Sharif University of Technology </location>

- Developed a CFD model to simulate reactive flow in catalytic converters. (MATLAB, COMSOL)
- Optimized the internal geometry of catalytic converters for maximal CO2/NOx removal.
- Implemented a neural network surrogate model to predict pressure drop in oil and gas pipelines. (MATLAB)

<hr style="height:0.5px; border:none; background-color:lightgray;" />

\* *Dragonfly is a software developed by ORS for scientific image processing.*

## Skills

### Technical Skills

- **Parallel/GPU Programming:** Expert in OpenMP, MPI, CUDA, Numba; proficient in Dask, Ray, CuPy for scalable data processing and model training.
- **Image Processing & Visualization:** Advanced usage of Scikit-Image, OpenCV; proficient in data visualization with Matplotlib, Plotly, Seaborn.
- **Data Science & Analysis:** Extensive experience with NumPy, SciPy, Pandas, Scikit-Learn; familiar with big data technologies like Apache Spark.
- **Cloud Technologies:** Hands-on experience with SLURM, Compute Canada HPC clusters; practical knowledge of cloud services in Google Cloud and AWS environments.
- **Programming & Software Development:** Proficient in Python, C/C++, Julia, MATLAB; experienced with full-stack development using HTML/CSS, JavaScript, Django. Strong understanding of Object-Oriented programming, design patterns, and efficient algorithms.
- **Machine Learning & AI:** Developed models using PyTorch, TensorFlow; familiar with JAX. Experienced in building and tuning large-scale, distributed machine learning models.

### Advanced Knowledge

- **Mathematical & Computational Modeling:** Proficient in scientific computing, solving differential equations using FEM, FVM, FDM. Skilled in optimization techniques and Bayesian statistics.
- **Machine Learning Techniques:** Deep learning, convolutional neural networks, autoencoders, and physics-informed neural networks. Expert in feature engineering and hyperparameter tuning.
- **Engineering & Simulation:** Deep understanding of thermodynamics, fluid mechanics, and reaction kinetics. Experienced with simulation software including AutoCAD, COMSOL Multiphysics, and Aspen HYSYS.

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

### [OpenPNM](https://github.com/PMEAL/OpenPNM) (420+ stars, 400+ citations)

- Python library for performing pore network modeling of porous media.
- Led development of second and third major releases.
- Built comprehensive test suites with custom CI pipelines for automated testing and deployment.

### [PoreSpy](https://github.com/PMEAL/porespy) (260+ stars, 250+ citations)

- Python library for performing pore network modeling of porous media.
- Led development of second and third major releases.
- Built comprehensive test suites with custom CI pipelines for automated testing and deployment.

### [AutoEIS](https://github.com/AUTODIAL/AutoEIS) (20+ stars, manuscript under review at JOSS)

- Python library for automated analysis of electrochemical impedance spectroscopy (EIS) data.
- Reimplemented core parts for speed (using parallelization) and memory efficiency, up to 20x faster for typical workflows.
- Built comprehensive test suites with custom CI pipelines for automated testing and deployment.

### [TauNet](https://github.com/ma-sadeghi/TauNet) (repo private until paper published)

- Python package for rapid estimation of tortuosity from voxel images using machine learning.
- Demonstrated up to 1000x speedup over the SOTA physics-based solvers on various datasets.

### [Tortuosity.jl](https://github.com/ma-sadeghi/Tortuosity.jl)

- Developed a Julia package (+ Python wrapper) for computing tortuosity from voxel images.
- Implemented multithreading and GPU support, up to 100x faster than SOTA competitors (e.g., [PuMA](https://github.com/nasa/puma) by NASA) and up to 5x faster than the SOTA GPU implementation ([TauFactor](https://github.com/taufactor/taufactor))

## Education

### McGill University | <location> Montreal, Canada </location> <time> 2015 – 2019 </time>

- Ph.D. in Chemical Engineering
- Thesis: Role of electrode microstructure on battery performance using computational modeling

### Sharif University of Technology | <location> Tehran, Iran </location> <time> 2015 – 2017 </time>

- M.S. in Chemical Engineering
- Thesis: CFD-aided modeling and shape optimization of CO2/NOx catalytic converters

### Sharif University of Technology | <location> Tehran, Iran </location> <time> 2012 – 2015 </time>

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

### Sharif Computer-Aided Chemical Engineering Contest (SC<sub>3</sub>*) <time> 2012 – 2015 </time>

*Founder, President (3x)*

- Led the scientific committee for designing problem sets.
- Secured sponsorship and oversaw executive tasks.

<hr style="height:0.5px; border:none; background-color:lightgray;" />

\* *An ICPC-like programming competition tailored for chemical engineering students*

## Publications

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

## Manuscripts Under Review/Preparation

- **Sadeghi, M.A.**, Ly, S., and Gostick, J.T. (2023) <span class="title">TauNet: An interpretable deep learning framework for rapid estimation of tortuosity from voxel images.</span> To be submitted to *npj Computational Materials*.

- **Sadeghi, M.A.**, and Gostick, J.T. (2023) <span class="title">Estimation of tortuosity of tomograms using a GPU-accelerated transient Laplace solver.</span> To be submitted to *Computers & Geosciences*.

## Conference Presentations

- McKague, M.G., **Sadeghi, M.A.** and Gostick, J., May. (2024) <span class="title">Pore network modelling of a lithium-ion battery cathode as a tool for microstructure optimization.</span> In 245th ECS Meeting (May 26-30, 2024).

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

## Teaching Experience

### Sessional Lecturer | <location> University of Waterloo </location> <time> Summer 2023 </time>

- CHEE 614 Capillary and Transport Phenomena in Porous Media*

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

<hr style="height:0.5px; border:none; background-color:lightgray;" />

\* *Courses marked with an asterisk (\*) are graduate-level.*

## Professional Service

### Journal/Conference Reviewer

- Reviewed submissions for the 5<sup>th</sup> Annual Research Software Engineers Conference (SeptembRSE) <time> 2021 </time>
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

<br/>
<br/>
<hr style="height:0.5px; border:none; background-color:lightgray;" />
<p class="center"><em>Last updated: 2024-04-16</em></p>

<!-- Detail checks: 1. No period for each bullet; 2. Past tense for previous work; 3. Present tense for current work; 4. Spell check passed; 5. Grammarly check passed; 6. Sync with Linkedin; 7. Check paper format -->

<script src="resume.js" defer></script>
