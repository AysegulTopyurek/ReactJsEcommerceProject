import React, { useState, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { Wrapper } from "../../components/addProduct/scAddProduct";
import Switch from "@material-ui/core/Switch";
import { useDropzone } from "react-dropzone";
import * as fileService from "../../services/fileService";
import * as productService from "../../services/productService";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import {
  FormControlLabel,
  FormHelperText,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { boolean } from "yup/lib/locale";
import { SettingsInputSvideo } from "@material-ui/icons";
const AddProduct = () => {
  const token = useSelector((state) => state.auth.token);
  const [file, setFile] = useState(null);
  const [imageError, setImageError] = useState(false);
  const [successMessage, setsuccessMessage] = useState(false);
  const [colors, setColors] = useState([]);
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [status, setStatus] = useState([]);
  const validationSchema = Yup.object({
    title: Yup.string()
      .required("Ürün adı zorunlu")
      .max(20, "Maximum 100 karakter olmalı."),
    description: Yup.string()
      .required("Açıklama alanı zorunlu")
      .max(500, "Maximum 500 karakter olmalı."),
    colorId: Yup.string().required("Renk alanı zorunludur"),
    brandId: Yup.string().required("Marka alanı zorunludur"),
    categoryId: Yup.string().required("Kategori alanı zorunludur"),
    statusId: Yup.string().required("Kullanım durumu alanı zorunludur"),
    price: Yup.string().required("Fiyat alanı zorunludur"),
  });
  const initialValues = {
    title: "",
    description: "",
    colorId: "",
    brandId: "",
    categoryId: "",
    statusId: "",
    price: "",
    isOfferable: false,
  };

  useEffect(() => {
    productService.getColor().then((res) => {
      setColors(res.data);
    });
    productService.getBrand().then((res) => {
      setBrands(res.data);
    });
    productService.getCategory().then((res) => {
      setCategories(res.data);
    });
    productService.getStatus().then((res) => {
      setStatus(res.data);
    });
  }, []);

  const formSubmit = (values) => {
    values = {
      ...values,
      color: colors.find((c) => c.id === values.colorId),
      brand: brands.find((c) => c.id === values.brandId),
      category: categories.find((c) => c.id === values.categoryId),
      status: status.find((c) => c.id === values.statusId),
    };

    if (!file) {
      // hata mesajı ...
      setImageError(true);
      return;
    }
    let formData = new FormData();
    formData.append("file", file);
    fileService
      .uploadImage(formData)
      .then((res) => {
        values = { ...values, imageUrl: res.data.url };
        return productService.addProduct(values);
      })
      .then((res) => {
        setsuccessMessage(true);
        const timer = setTimeout(() => {
          setsuccessMessage(false);
        }, 3000);
        return () => clearTimeout(timer);
      })
      .catch((err) => {
        console.log(err.response?.data?.message);
      });
  };

  const onDrop = useCallback((e) => {
    if (e.target && e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    } else if (e && e.length > 0) {
      setFile(e[0]);
    }
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <Wrapper>
      {successMessage && (
        <div className="successMessage">
          <div className="successIcon">
            <CheckCircleOutlineIcon style={{ color: "#46AF32" }} />
          </div>
          <div className="successDescription">Ürün eklendi</div>
        </div>
      )}
      <Header token={token}></Header>

      <div className="spaceX" style={{ marginBottom: "-1em" }}>
        <h2>Ürün detayları</h2>
      </div>
      <div className="spaceX twoColumn">
        <div className="left">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={formSubmit}
          >
            {(formik) => {
              const {
                values,
                handleChange,
                handleSubmit,
                errors,
                touched,
                handleBlur,
              } = formik;
              return (
                <form className="form" onSubmit={handleSubmit}>
                  <div className="inputWrapper">
                    <label>Ürünün ismi</label>
                    <div className="input">
                      <TextField
                        error={errors.title && touched.title}
                        variant="standard"
                        helperText={errors.title}
                        name="title"
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.title}
                      />
                    </div>
                  </div>

                  <div className="inputWrapper">
                    <label>Açıklaması</label>
                    <div className="textarea">
                      <TextField
                        multiline
                        rows="4"
                        error={errors.description && touched.description}
                        variant="standard"
                        helperText={errors.description}
                        name="description"
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.description}
                        placeholder="Örnek: Iphone 12 Pro Max"
                      />
                    </div>
                  </div>

                  <div className="inputColTwo">
                    <div className="inputWrapper">
                      <label>Kategori</label>
                      <div className="input">
                        <Select
                          name="categoryId"
                          value={values.categoryId}
                          onChange={handleChange}
                        >
                          {categories.map((c) => (
                            <MenuItem key={c.id} value={c.id}>
                              {c.title}
                            </MenuItem>
                          ))}
                        </Select>
                        {errors.categoryId && touched.categoryId && (
                          <FormHelperText>{errors.categoryId}</FormHelperText>
                        )}
                      </div>
                    </div>
                    <div className="inputWrapper">
                      <label>Marka</label>
                      <div className="input">
                        <Select
                          name="brandId"
                          value={values.brandId}
                          onChange={handleChange}
                        >
                          {brands.map((c) => (
                            <MenuItem key={c.id} value={c.id}>
                              {c.title}
                            </MenuItem>
                          ))}
                        </Select>
                        {errors.brandId && touched.brandId && (
                          <FormHelperText>{errors.brandId}</FormHelperText>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="inputColTwo">
                    <div className="inputWrapper">
                      <label>Renk</label>
                      <div className="input">
                        <Select
                          name="colorId"
                          value={values.colorId}
                          onChange={handleChange}
                        >
                          {colors.map((c) => (
                            <MenuItem key={c.id} value={c.id}>
                              {c.title}
                            </MenuItem>
                          ))}
                        </Select>
                        {errors.colorId && touched.colorId && (
                          <FormHelperText>{errors.colorId}</FormHelperText>
                        )}
                      </div>
                    </div>
                    <div className="inputWrapper">
                      <label>Kullanım Durumu</label>
                      <div className="input">
                        <Select
                          name="statusId"
                          value={values.statusId}
                          onChange={handleChange}
                        >
                          {status.map((c) => (
                            <MenuItem key={c.id} value={c.id}>
                              {c.title}
                            </MenuItem>
                          ))}
                        </Select>
                        {errors.statusId && touched.statusId && (
                          <FormHelperText>{errors.statusId}</FormHelperText>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="inputWrapper">
                    <label>Fiyat</label>
                    <div className="input">
                      <TextField
                        error={errors.price && touched.price}
                        variant="standard"
                        helperText={errors.price}
                        name="price"
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.price}
                      />
                    </div>
                  </div>

                  <div className="inputWrapper">
                    <label>Teklif opsiyonu</label>
                    <FormControlLabel
                      control={
                        <Switch
                          name="isOfferable"
                          color="primary"
                          onChange={handleChange}
                        />
                      }
                    />
                  </div>
                  <button className="btn btn-blue saveBtn" type="submit">
                    Kaydet
                  </button>
                </form>
              );
            }}
          </Formik>
        </div>
        <div className="right">
          <div className="uploadImage">
            <div {...getRootProps()}>
              <div className="dragDrop">
                <p>Sürükleyip bırakarak yükle</p>
                <p>veya</p>
                <input
                  {...getInputProps()}
                  onChange={onDrop}
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                />
                <label htmlFor="file" className="file-trigger">
                  {file ? file.name : "Görsel Seç"}
                </label>
                <p style={{ marginTop: "1em" }}>
                  PNG ve JPEG Dosya boyutu: max. 400kb
                </p>
              </div>
            </div>
            {imageError && (
              <div style={{ color: "#F77474" }}>Lütfen bir image ekleyiniz</div>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default AddProduct;
