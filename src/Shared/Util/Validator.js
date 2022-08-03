const VALIDATE_REQUIRE = "VALIDATE_REQUIRE";

export const validateRequire = () => VALIDATE_REQUIRE;

export const validate = (type, value) => {
  let isValid = false;
  if (type === VALIDATE_REQUIRE) {
    isValid = value.trim().length > 0;
  }

  return isValid;
};
