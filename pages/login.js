import LoginForm from "../components/LoginForm";
import LoginLayout from "../shared/LoginLayout";
import PageLayout from "./PageLayout";

const styles = {
  background: "#D9D9D9",
  padding: "20px",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  borderRadius: "24px",
  height: "348px",
};

function login() {
  return (
    <PageLayout display="none">
      <LoginLayout>
        <LoginForm styles={styles} />
      </LoginLayout>
    </PageLayout>
  );
}

export default login;
