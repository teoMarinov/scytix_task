"use client";

import { format } from "date-fns";
import LaunchCardProps from "./type";
import { useRouter } from "next/navigation";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

export default function LaunchCard({ launch }: LaunchCardProps) {
  const router = useRouter();

  const cardImage =
    launch.links?.flickr_images?.at(-1) || "/png/no-launch-image.png";

  return (
    <Grid size={1} justifyItems={"center"}>
      <Card
        onClick={() => router.push(`/launch/${launch.id}`)}
        sx={{ width: "90%" }}
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
              overflow={"hidden"}
              textOverflow={"ellipsis"}
              sx={{ textWrap: "nowrap" }}
              gutterBottom
              variant="h5"
              component="div"
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
