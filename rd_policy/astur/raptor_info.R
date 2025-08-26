library(tidyverse)
library(mpsgSE)

coopers <- core_trend |>
  filter(str_detect(species_name, "Cooper"))

goshawk <- core_trend |>
  filter(str_detect(species_name, "Goshawk"))

ssh <- core_trend |>
  filter(str_detect(species_name, "shinned Hawk"))

ssh_exp <- expanded_trend |>
  filter(str_detect(species_name, "shinned Hawk"))
