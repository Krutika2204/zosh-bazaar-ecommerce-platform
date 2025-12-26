import React from "react";
import { Grid, Grid as MuiGrid, TextField } from "@mui/material";

interface BecomeSellerFormStep2Props {
  formik: any; // Replace 'any' with the correct type for formik instance
}

const BecomeSellerFormStep2: React.FC<BecomeSellerFormStep2Props> = ({ formik }) => {
  return (
    <div>
      <Grid container spacing={3}>
        <MuiGrid item xs={12} component={"div" as any}>
          <TextField
            fullWidth
            name="pickupAddress.name"
            label="Name"
            value={formik.values.pickupAddress.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </MuiGrid>
        <MuiGrid item xs={6} component={"div" as any}>
          <TextField
            fullWidth
            name="pickupAddress.mobile"
            label="Mobile"
            value={formik.values.pickupAddress.mobile}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.mobile && Boolean(formik.errors.mobile)}
            helperText={formik.touched.mobile && formik.errors.mobile}
          />
        </MuiGrid>
        <MuiGrid item xs={6} component={"div" as any}>
          <TextField
            fullWidth
            name="pickupAddress.pincode"
            label="Pincode"
            value={formik.values.pickupAddress.pincode}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.pickupAddress?.pincode && Boolean(formik.errors.pickupAddress?.pincode)}
            helperText={formik.touched.pickupAddress?.pincode && formik.errors.pickupAddress?.pincode}
          />
        </MuiGrid>
        <MuiGrid item xs={12} component={"div" as any}>
          <TextField
            fullWidth
            name="pickupAddress.address"
            label="Address (House No, Building, Street)"
            value={formik.values.pickupAddress.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.pickupAddress?.address && Boolean(formik.errors.pickupAddress?.address)}
            helperText={formik.touched.pickupAddress?.address && formik.errors.pickupAddress?.address}
          />
        </MuiGrid>
        <MuiGrid item xs={12} component={"div" as any}>
          <TextField
            fullWidth
            name="pickupAddress.locality"
            label="Locality/Town"
            value={formik.values.pickupAddress.locality}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.pickupAddress?.locality && Boolean(formik.errors.pickupAddress?.locality)}
            helperText={formik.touched.pickupAddress?.locality && formik.errors.pickupAddress?.locality}
          />
        </MuiGrid>
        <MuiGrid item xs={6} component={"div" as any}>
          <TextField
            fullWidth
            name="pickupAddress.city"
            label="City"
            value={formik.values.pickupAddress.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.pickupAddress?.city && Boolean(formik.errors.pickupAddress?.city)}
            helperText={formik.touched.pickupAddress?.city && formik.errors.pickupAddress?.city}
          />
        </MuiGrid>
        <MuiGrid item xs={6} component={"div" as any}>
          <TextField
            fullWidth
            name="pickupAddress.state"
            label="State"
            value={formik.values.pickupAddress.state}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.pickupAddress?.state && Boolean(formik.errors.pickupAddress?.state)}
            helperText={formik.touched.pickupAddress?.state && formik.errors.pickupAddress?.state}
          />
        </MuiGrid>
      </Grid>
    </div>
  );
};

export default BecomeSellerFormStep2;
