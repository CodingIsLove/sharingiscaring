setwd("C:/Users/TAAGECH9/Documents/Github/sharingiscaring/R")
workdir <- getwd()
blockSessinDataFile <- read.csv(
  file= "./trackingData/BlockSessionTracking.CSV",
  header=FALSE,
  stringsAsFactors=TRUE
)
blockSessinDataFile
