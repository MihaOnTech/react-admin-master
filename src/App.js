import { useState } from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom"
import { ProSidebarProvider } from "react-pro-sidebar";
import { ApolloProvider } from "@apollo/client";
import client from "./lib/apollo";
import Topbar from "./scenes/global/Topbar";
import SidebarMenu from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Tribu from "./scenes/tribu";
import Chat from "./scenes/chats";
import Tablon from "./scenes/tablon";
import Calendario from "./scenes/calendario";
import Encuestas from "./scenes/encuestas";
/* import Perfil from "./scenes/perfil";
import Aprender from "./scenes/aprender";
import Wallet from "./scenes/wallet";



import Mnemoteca from "./scenes/mnemoteca";
import Graficos from "./scenes/graficos";
import Mapas from "./scenes/mapas";
import Apoyar from "./scenes/apoyar";
import Contacto from "./scenes/contacto";
import Faq from "./scenes/faq"; */


function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ApolloProvider client={client}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ProSidebarProvider>
            <div className="app">
              <SidebarMenu isSidebar={isSidebar} />
              <main className="content">
                {/* CONTENT */}
                <Topbar setIsSidebar={setIsSidebar} />
                <Routes>

                  <Route exact path="/" element={<Dashboard />} />
                  <Route path="/tribu" element={<Tribu />} />
                  <Route path="/chats" element={<Chat />} />
                  <Route path="/tablon" element={<Tablon />} />
                  <Route path="/calendario" element={<Calendario />} />
                  <Route path="/encuestas" element={<Encuestas />} />  
                  {/**
                  <Route path="/perfil" element={<Perfil />} />
                  <Route path="/aprender" element={<Aprender />} />
                  <Route path="/wallet" element={<Wallet />} />
                 
                  <Route path="/tribu" element={<Tribu />} />
                  

                  
                  
                 
                  <Route path="/mnemoteca" element={<Mnemoteca />} />
                  <Route path="/graficos" element={<Graficos />} />
                  <Route path="/mapas" element={<Mapas />} />
                  
                  
                  <Route path="/apoyar" element={<Apoyar />} /> 
                  <Route path="/contacto" element={<Contacto />} /> 
                  <Route path="/faq" element={<Faq />} /> 
                      */}
                </Routes>
              </main>
            </div>
          </ProSidebarProvider>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </ApolloProvider>
  );
}

export default App;
