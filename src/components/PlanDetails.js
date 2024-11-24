import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Button } from "@mui/material";
import { getPlanFromListedData } from "../store/action/planAction";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../store/action/loggedUserAction";

function PlanDetails() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const plans = useSelector((state) => state.plan);
  const data = useSelector((state) => state.loggedUserDetails);
  const profile = data?.user;
  const eachPlan = plans?.plan;

  const handleSelectedPlan = (selectedPlan) => {
    dispatch(getPlanFromListedData(selectedPlan));
    dispatch(loginUser(profile));
    navigate(
      `/paymentMethod/id?${profile.id}/paymentPending?/plan:${selectedPlan.planName}`
    );
  };

  return (
    <div>
      <h1
        style={{
          color: "purple",
        }}
      >
        Plans
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        {eachPlan.map((plans, index) => (
          <Card
            sx={{ maxWidth: 345 }}
            key={index}
            style={{
              margin: "10px",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://images.unsplash.com/photo-1517963628607-235ccdd5476c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGd5bXxlbnwwfHwwfHx8MA%3D%3D"
                alt="fitness"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {plans.planName}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  <strong>Features:</strong>
                </Typography>
                {plans.features &&
                  plans.features.map((feature, featureIndex) => (
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                      key={featureIndex}
                    >
                      - {feature}
                    </Typography>
                  ))}
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  <strong>Benefits:</strong>
                </Typography>
                {plans.benefits &&
                  plans.benefits.map((benefit, benefitIndex) => (
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                      key={benefitIndex}
                    >
                      - {benefit}
                    </Typography>
                  ))}

                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  <strong>Payment Type:</strong> {plans.paymentType}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  <strong>Subscription Type:</strong> {plans.subscriptionType}
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  style={{
                    marginTop: "10px",
                  }}
                  onClick={() => handleSelectedPlan(plans)}
                >
                  Subscribe
                </Button>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default PlanDetails;
