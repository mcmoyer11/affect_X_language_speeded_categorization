library(multcomp) # not available for this version of R
library(stringr)
library(textstem)
library(tidyverse)
library(kableExtra)
theme_set(theme_bw())
library(ggrepel)
this.dir <- dirname(rstudioapi::getSourceEditorContext()$path)
setwd(this.dir)
# source("../../../helpers.R")

v <- read_csv("01a_conc_verbs.csv")
v["Category"] <- "Verbs"
v["Experiment"] <- "Ex1a: Conc-Abs (Verbs)"
v["TruthCond"] <- "Conc-Abs"

n <- read_csv("01b_conc_nouns.csv")
n["Category"] <- "Nouns"
n["Experiment"] <- "Ex1b: Conc-Abs (Nouns)"
n["TruthCond"] <- "Conc-Abs"

a <- read_csv("01c_conc_adjs.csv")
a["Category"] <- "Adjs"
a["Experiment"] <- "Ex1c: Conc-Abs (Adjs)"
a["TruthCond"] <- "Conc-Abs"

v2 <- read_csv("02a_phys-psych_verbs.csv")
v2["Category"] <- "Verbs"
v2["Experiment"] <- "Ex2a: Phys-Psyc (Verbs)"
v2["TruthCond"] <- "Phys-Soc/Psych"

a2 <- read_csv("02b_phys-soc_adjs.csv")
a2["Category"] <- "Adjs"
a2["Experiment"] <- "Ex2b: Phys-Soc (Adjs)"
a2["TruthCond"] <- "Phys-Soc/Psych"

n2 <- read_csv("03_animacy_nouns.csv")
n2["Category"] <- "Nouns"
n2["Experiment"] <- "Ex3: Animacy (Nouns)"
n2["TruthCond"] <- "Animacy"

s <- read_csv("04_syntax_nouns-verbs.csv")
s["Experiment"] <- "Ex4: Syntactic (N v. V)"
s["TruthCond"] <- "Syntactic"

d <- bind_rows(v,n,a,a2,v2,n2,s)
write.csv(d,"Speeded_Categorization_Stimuli.csv")