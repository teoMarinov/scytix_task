"use client";

import {
  Box,
  Paper,
  Stack,
  Modal,
  Button,
  InputBase,
  IconButton,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function MobileSearchModal() {
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams(Array.from(searchParams.entries()));
    if (input) {
      params.set("mission_name", input);
    } else {
      params.delete("mission_name");
    }

    router.push(`${pathname}?${params.toString()}`);
    setOpen(false);
  };

  return (
    <>
      <IconButton onClick={() => setOpen(true)} aria-label="open search">
        <Image
          width={24}
          height={24}
          aria-hidden
          src="/search-icon.svg"
          alt="Header site icon"
        />
      </IconButton>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          px={2}
          height="100vh"
          display="flex"
          alignItems="center"
          justifyContent="center"
          onClick={() => setOpen(false)}
        >
          <Stack
            p={3}
            spacing={2}
            width="100%"
            maxWidth={400}
            bgcolor="white"
            borderRadius={2}
            onClick={(e) => e.stopPropagation()}
          >
            <Paper
              component="form"
              sx={{
                p: "2px 8px",
                display: "flex",
                borderRadius: "20px",
                alignItems: "center",
              }}
              onSubmit={handleSubmit}
            >
              <InputBase
                value={input}
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Launch"
                onChange={(e) => setInput(e.target.value)}
              />
            </Paper>

            <Button type="submit" variant="contained" onClick={handleSubmit}>
              Search
            </Button>
          </Stack>
        </Box>
      </Modal>
    </>
  );
}
