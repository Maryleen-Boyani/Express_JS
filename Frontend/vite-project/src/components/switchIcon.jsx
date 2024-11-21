import { Switch } from "@mui/material";
import { useState } from "react";

export default function SwitchIcon() {
  const [checked, setChecked] = useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return <Switch checked={checked} bgColor="#006666" onChange={handleChange} />;
}
