var documenterSearchIndex = {"docs":
[{"location":"ecosystem/#Julia's-Physics-Ecosystem-1","page":"Physics Ecosystem","title":"Julia's Physics Ecosystem","text":"","category":"section"},{"location":"ecosystem/#Dealing-with-physical-quantities-1","page":"Physics Ecosystem","title":"Dealing with physical quantities","text":"","category":"section"},{"location":"ecosystem/#","page":"Physics Ecosystem","title":"Physics Ecosystem","text":"JuliaPhysics:\nMeasurements.jl: Error propagation library\nPhysicalConstants.jl: Collection of fundamental physical constants, with physical units and uncertainties\nPeriodicTable.jl: Periodic Table for Julians\nUnitful.jl: Physical quantities with arbitrary units\nNaturallyUnitful.jl: Facilities for using natural units with Unitful.jl\nUnitfulAstro.jl: An extension of Unitful.jl for astronomers.\nBinningAnalysis.jl: Standard error estimation tools for correlated data","category":"page"},{"location":"ecosystem/#Differential-equations-1","page":"Physics Ecosystem","title":"Differential equations","text":"","category":"section"},{"location":"ecosystem/#","page":"Physics Ecosystem","title":"Physics Ecosystem","text":"DifferentialEquations.jl: Julia suite for high-performance solvers of differential equations\nDiffEqPhysics.jl: A library for building differential equations arising from physical problems\nDiffEqOperators.jl: Linear operators for discretizations of differential equations\nModelingToolkit.jl: A toolkit for modeling and creating DSLs for Scientific Computing in Julia","category":"page"},{"location":"ecosystem/#TODOS-here-1","page":"Physics Ecosystem","title":"TODOS here","text":"","category":"section"},{"location":"ecosystem/#","page":"Physics Ecosystem","title":"Physics Ecosystem","text":"Short tutorial with common physics problems\nOverview of DiffEqPhysics and FDM with DiffEq\nhow to use ModellingToolkit by @ChrisRackauckas and @HarrisonGrodin if possible...with special reference to constructing systems of diffeq programatically","category":"page"},{"location":"ecosystem/#Dynamical-systems-1","page":"Physics Ecosystem","title":"Dynamical systems","text":"","category":"section"},{"location":"ecosystem/#","page":"Physics Ecosystem","title":"Physics Ecosystem","text":"JuliaDynamics\nDynamicalSystems.jl: A Julia software library for nonlinear dynamics: Delay embeddings, recurrence analysis, chaos (e.g. Lyapunov exponents) and interactive applications.\nDynamicalBilliards.jl: Feature-full library for billiards in two dimensions, with support for plotting/animating\nPyDSTool.jl: A wrapper for the PyDSTool library\nCausalityTools.jl : a framework for detecting causal relations between timeseries.\nReachability.jl : approximating the reachable states and checking safety properties of affine systems.\nAgents.jl : Agent-based modelling, cellular automata.","category":"page"},{"location":"ecosystem/#Astronomy-1","page":"Physics Ecosystem","title":"Astronomy","text":"","category":"section"},{"location":"ecosystem/#","page":"Physics Ecosystem","title":"Physics Ecosystem","text":"JuliaAstro","category":"page"},{"location":"ecosystem/#Quantum-mechanics-and-computing-1","page":"Physics Ecosystem","title":"Quantum mechanics and computing","text":"","category":"section"},{"location":"ecosystem/#","page":"Physics Ecosystem","title":"Physics Ecosystem","text":"Yao.jl: Extensible, Efficient Quantum Algorithm Design for Humans.\nQuantumOptics.jl: Library for the numerical simulation of closed as well as open quantum systems.","category":"page"},{"location":"ecosystem/#Finite-element-analysis-1","page":"Physics Ecosystem","title":"Finite element analysis","text":"","category":"section"},{"location":"ecosystem/#","page":"Physics Ecosystem","title":"Physics Ecosystem","text":"JuAFEM.jl: Finite element toolbox for Julia\nJuliaFEM.jl: Framework for the distributed processing of large Finite Element Models across clusters of computers using simple programming models\nFENiCS.jl: A wrapper for the FEniCS Finite Element library","category":"page"},{"location":"ecosystem/#Solid-state-1","page":"Physics Ecosystem","title":"Solid state","text":"","category":"section"},{"location":"ecosystem/#","page":"Physics Ecosystem","title":"Physics Ecosystem","text":"JuliaAtoms: Atomic physics\nAtomicLevels.jl: A library used to define electronic configurations constructed from electronic orbitals in spherical symmetry.\nAtoms.jl: Data structures for representing atoms in a product space of orbitals and a radial grid. The radial grid can be any implementation of the ContinuumArrays.jl interface.\nEnergyExpressions.jl: A library for setting up the energy expression of a system built up from a set of configurations. At the moment, the implementation is geared towards atomic systems (in that it uses data structures from AtomicLevels.jl), but it is applicable to other systems as well, such as molecules.\nSCF.jl: A library for the solution of integro-differential eigenproblems, in a self-consistent manner.\nAngularMomentumAlgebra.jl: A library for the special case of energy expressions in spherical symmetry.\nAtomicPotentials.jl Provides structures for modelling the atomic nucleus as a potential.\nlibAtoms: Materials-modelling + FEM orientated libraries\nJuLIP: library for Interatomic Potentials\nASE.jl: Julia Bindings for Atomic Simulation Environment\nJuLIPMaterials: collection of Julia tools for materials science\nCarrierCapture.jl: Semi-classical recombination in semiconductors.\nPolaronMobility.jl: Feynman variational path-integral model for the Fröhlich polaron\nCoulombIntegrals.jl: A library that implements the calculation of the Coulombic repulsion between pairs of electrons.\nMatrixFactorizations.jl Wrappers around the solvers from IterativeSolvers.jl that can be used as lazy factorizations.\nPseudoPotentials.jl: Model potentials used to reduces calculation complexity by representing a core of electrons in a mean-field sense.  This can turn a multi-electron problem into an approximate few- or single-electron problem.\nMonteCarlo.jl: Classical and quantum Monte Carlo simulations in Julia\nWignerSymbols.jl: Compute Wigner's 3j and 6j symbols, and related quantities such as Clebsch-Gordan coefficients and Racah's symbols.","category":"page"},{"location":"ecosystem/#Tensors-1","page":"Physics Ecosystem","title":"Tensors","text":"","category":"section"},{"location":"ecosystem/#","page":"Physics Ecosystem","title":"Physics Ecosystem","text":"ITensors.jl: A Julia library for efficient tensor and tensor network calculations\nTensorOperations.jl: Julia package for tensor contractions and related operations\nEinsum.jl: Einstein summation notation in Julia\nThat new Einsum library for more automatic differentiation?","category":"page"},{"location":"ecosystem/#Radiation-detectors-1","page":"Physics Ecosystem","title":"Radiation detectors","text":"","category":"section"},{"location":"ecosystem/#","page":"Physics Ecosystem","title":"Physics Ecosystem","text":"RadiationSpectra.jl: Toolkit for analysis of radiation spectra in Julia\nRadiationDetectorSignals.jl: Data types for signals of radiation detectors\nRadiationDetectorDSP.jl: Digital signal processing for radiation detectors","category":"page"},{"location":"ecosystem/#Plotting-1","page":"Physics Ecosystem","title":"Plotting","text":"","category":"section"},{"location":"ecosystem/#","page":"Physics Ecosystem","title":"Physics Ecosystem","text":"Visualization is one of the most important tools in our toolkit. There are three main plotting packages in Julia:","category":"page"},{"location":"ecosystem/#","page":"Physics Ecosystem","title":"Physics Ecosystem","text":"Plots.jl: Very intuitive and convenient, Plots.jl is a wrapper around several plotting backends.  Plots tries to figure out what you want it to do, not just what you tell it.\nMakie.jl: Built around the idea of fast, interactive plotting utilizing the speed of OpenGL and the GPU (and WebGL now), Makie.jl is a next-generation plotting package which offers superior interactivity and speed.  It's great for building interactive or animated visualzations with minimal overhead, but the time to first plot is a little slow compared to Plots, and it isn't quite as feature-complete. Written in pure Julia.\nPyPlot.jl: A wrapper around the PyPlot interface to the popular Python plotting library matplotlib.","category":"page"},{"location":"tutorials/#Tutorials-1","page":"Tutorials","title":"Tutorials","text":"","category":"section"},{"location":"tutorials/#","page":"Tutorials","title":"Tutorials","text":"The tutorials are collected in the PhysicsTutorials repository. We happily accept pull requests that add new tutorials or improve the existing ones!","category":"page"},{"location":"tutorials/#General-1","page":"Tutorials","title":"General","text":"","category":"section"},{"location":"tutorials/#","page":"Tutorials","title":"Tutorials","text":"Speeding up Quantum Mechanics: Matrix Types\nQuantum Ising Phase Transition","category":"page"},{"location":"tutorials/#Machine-Learning-1","page":"Tutorials","title":"Machine Learning","text":"","category":"section"},{"location":"tutorials/#","page":"Tutorials","title":"Tutorials","text":"Machine Learning the Ising Transition","category":"page"},{"location":"tutorials/#Dynamical-Systems-1","page":"Tutorials","title":"Dynamical Systems","text":"","category":"section"},{"location":"tutorials/#","page":"Tutorials","title":"Tutorials","text":"Simulating a billiard via multiple dispatch","category":"page"},{"location":"community/organizations/#Julia's-Physics-Organizations-1","page":"Julia's Physics Organizations","title":"Julia's Physics Organizations","text":"","category":"section"},{"location":"community/organizations/#","page":"Julia's Physics Organizations","title":"Julia's Physics Organizations","text":"Julia has a very lively and welcoming physics community. You shouldn't hesitate to engage with other users and package authors if you have questions or want to contribute to a project.","category":"page"},{"location":"community/organizations/#","page":"Julia's Physics Organizations","title":"Julia's Physics Organizations","text":"Among the cornerstones of our community are Julia GitHub Groups, also known as Julia organizations, which typically revolve around a particular subfields of physics and group people together in a contextual way. An overview of all Julia organizations can be found on julialang.org. Below we list Julia's physics(-related) organizations.","category":"page"},{"location":"community/organizations/#","page":"Julia's Physics Organizations","title":"Julia's Physics Organizations","text":"JuliaPhysics - General physics organization\nJuliaAstro - Community Astronomy and Astrophysics packages for Julia\nQuantumBFS - A group of quantum developers around Bao Fu Si (mainly quantum circuits)\nJuliaDynamics - A Julia organization for dynamical systems\nJuliaGeo - Geoscience organization\nJuliaDiffEq - An organization for differential equations in Julia","category":"page"},{"location":"#JuliaPhysics-1","page":"Introduction","title":"JuliaPhysics","text":"","category":"section"},{"location":"#","page":"Introduction","title":"Introduction","text":"Welcome to the homepage of the JuliaPhysics, your entry point into the physics community of Julia.","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"On the following web pages we try to give you an effortless introduction into using Julia for physics. Among others, we provide you with","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"an overview of physics-related packages in the ecosystem,\ntutorials and snippets,\ninformation about how to connect to the community.","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"Julia has a large ecosystem of packages built around scientific computing. In the section Ecosystem we've aimed to give an overview of packages in the ecosystem that can be useful for physical computing.","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"JuliaPhysics itself hosts several packages, as well. You can find a comprehensive list on our GitHub page.","category":"page"}]
}
