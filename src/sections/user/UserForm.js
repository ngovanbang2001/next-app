//mui
import { LoadingButton } from "@mui/lab";
import { Button, DialogActions, Grid, Stack, Typography } from "@mui/material";
//form
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, RHFTextField } from "@/components/hook-form";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

import { useSnackbar } from "notistack";
import PropTypes from "prop-types";
import { useCreateUserMutation, useUpdateUserMutation } from "./userSlice";
//config
import { FORM_FIELD } from "./list/config";

UserForm.propTypes = {
  user: PropTypes.object,
  onClose: PropTypes.func,
};

export default function UserForm({ user, onClose }) {
  const { enqueueSnackbar } = useSnackbar();
  const [createUser] = useCreateUserMutation();
  const [updateUser] = useUpdateUserMutation();
  const { id: userId } = user || {};
  const {
    username = "",
    email = "",
    firstName = "",
    lastName = "",
  } = user?.attributes || {};
  const chosen = {
    username,
    email,
    firstName,
    lastName,
  };
  const UserFormSchema = Yup.object().shape({
    [FORM_FIELD.NAME]: Yup.string().max(5000).required("Name is Required!"),
    [FORM_FIELD.EMAIL]: Yup.string().max(5000).required("Email is Required"),
  });

  const methods = useForm({
    resolver: yupResolver(UserFormSchema),
    defaultValues: Object.keys(FORM_FIELD).reduce((acc, cur) => {
      const field = FORM_FIELD[cur];
      return {
        ...acc,
        [field]: chosen[field] || "",
      };
    }, {}),
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;
  const onSubmit = async (data) => {
    try {
      if (userId) {
        const res = await updateUser({ userId, data });
        res?.data
          ? enqueueSnackbar("Update user success!")
          : enqueueSnackbar("Update user failed!", {
              variant: "error",
            });
      } else {
        const res = await createUser({
          ...data,
          password: "11111111111",
        });
        res?.data
          ? enqueueSnackbar("Create user success!")
          : enqueueSnackbar("Create user failed!", {
              variant: "error",
            });
      }
      reset();
      onClose();
    } catch (error) {
      enqueueSnackbar(
        error?.validation?.body?.message ||
          error?.data?.error ||
          error?.data?.message ||
          error?.message,
        {
          variant: "error",
        }
      );
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2} px={3} py={3}>
        <Grid item xs={12} md={12}>
          <Stack spacing={1}>
            <Typography>User Name</Typography>
            <RHFTextField name={FORM_FIELD.NAME} />
          </Stack>
        </Grid>
        <Grid item xs={12} md={12}>
          <Stack spacing={1}>
            <Typography>Email</Typography>
            <RHFTextField name={FORM_FIELD.EMAIL} />
          </Stack>
        </Grid>
        <Grid item xs={12} md={12}>
          <Stack spacing={1}>
            <Typography>First Name</Typography>
            <RHFTextField name={FORM_FIELD.FIRSTNAME} />
          </Stack>
        </Grid>
        <Grid item xs={12} md={12}>
          <Stack spacing={1}>
            <Typography>Last Name</Typography>
            <RHFTextField name={FORM_FIELD.LASTNAME} />
          </Stack>
        </Grid>
        <Grid item xs={12} mt={3}>
          <DialogActions>
            {userId ? (
              <LoadingButton
                type="submit"
                variant="contained"
                loading={isSubmitting}
              >
                Save
              </LoadingButton>
            ) : (
              <LoadingButton
                type="submit"
                variant="contained"
                loading={isSubmitting}
              >
                Create
              </LoadingButton>
            )}
            <Button variant="outlined" color="inherit" onClick={onClose}>
              Cancel
            </Button>
          </DialogActions>
        </Grid>
      </Grid>
    </FormProvider>
  );
}
