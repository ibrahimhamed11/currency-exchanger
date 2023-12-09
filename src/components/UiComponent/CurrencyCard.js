// CurrencyCard.js

import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const CurrencyCard = ({ currency, value }) => (
  <Card>
    <CardContent>
      <Typography variant="h6" component="div">
        {currency}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Value: {value}
      </Typography>
    </CardContent>
  </Card>
);

export default CurrencyCard;
