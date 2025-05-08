"use client";

import {
  Card,
  Grid,
  CardMedia,
  Typography,
  CardContent,
  CardActionArea,
} from "@mui/material";
import { format } from "date-fns";
import LaunchCardProps from "./type";
import { useRouter } from "next/navigation";

export default function LaunchCard({ launch }: LaunchCardProps) {
  const router = useRouter();

  const cardImage =
    launch.links?.flickr_images?.at(-1) || "/png/no-launch-image.png";

  return (
    <Grid size={1} justifyItems={"center"}>
      <Card
        onClick={() => router.push(`/launch/${launch.id}`)}
        sx={{ width: "100%" }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={cardImage}
            alt={launch.mission_name!}
          />

          <CardContent>
            <Typography
              variant="h5"
              width="75vw"
              gutterBottom
              component="div"
              overflow={"hidden"}
              textOverflow={"ellipsis"}
              sx={{ textWrap: "nowrap" }}
            >
              {launch.mission_name} -
              {format(launch.launch_date_local, "dd/MM/yyyy")}
            </Typography>

            <Typography>Rocket: {launch.rocket?.rocket_name}</Typography>

            <Typography>
              Launch site: {launch.launch_site?.site_name || "-"}
            </Typography>

            <Typography color={launch.launch_success ? "green" : "red"}>
              {launch.launch_success ? "Success" : "Fail"}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
