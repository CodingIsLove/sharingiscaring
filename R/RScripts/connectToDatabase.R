library(odbc)
con <- dbConnect(
  odbc(),
  Driver = "SQL Driver",
  Server = "db-serv-indoor-loc.database.windows.net",
  Database = "indoor-loc-db",
  Trusted_Connection ="True",
  uid="chris",
  pwd="Nolliebigspin1"
)
