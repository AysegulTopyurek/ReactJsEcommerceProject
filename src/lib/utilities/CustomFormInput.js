import React from "react";
import { TextField } from "formik-material-ui";
import { Field, useField } from "formik";
import { makeStyles } from "@material-ui/core/styles";
const CustomFormInput = ({ ...props }) => {
  const useStyles = makeStyles({
    underline: {
      "&&&:before": {
        borderBottom: "none"
      },
      "&&:after": {
        borderBottom: "none"
      }
    },
    input:{
      "&&":{
        outline: 0,background: "#F4F4F4",color:"#99A0A7",padding: "10px",borderRadius: "8px",
      },
     "&&:focus":{
       background:"#F0F8FF",
       border:"1px solid #4B9CE2",
       borderRadius:"8px"
     }
    }

  });
  const classes = useStyles();
  const [field, meta] = useField(props);
  let styles ={textField:{},input:{   }}
  return (
    <Field
     style={styles.textField}
     InputProps={{ classes,style:styles.input }}
      component={TextField}
      {...field}
      {...props}

    />
  );
};

export default CustomFormInput;
