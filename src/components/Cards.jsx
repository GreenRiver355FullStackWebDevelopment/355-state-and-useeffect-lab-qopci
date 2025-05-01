import { Box, Paper, Typography } from "@mui/material";

const Cards = ({ pokemons, onPokemonClick }) => {
  return (
    <Box sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
        gap: 1,
        backgroundColor: "#1f1f1f",
        padding: "1rem",
        borderRadius: "8px",
        maxWidth: 600,
        margin: "0 auto",
      }}>
      {pokemons.map((p, index) => (
        <Paper
          key={index}
          onClick={() => onPokemonClick(p.url)}
          sx={{
            backgroundColor: "#3B3B3B",
            color: "white",
            padding: "0.5rem",
            cursor: "pointer",
            textAlign: "center",
            ":hover": {
              backgroundColor: "#555",
            },
          }}>
          <Typography>{p.name.charAt(0).toUpperCase() + p.name.slice(1)}</Typography>
        </Paper>
      ))}
    </Box>
  );
};

export default Cards;
