import { Box } from '@mui/system';
import { Button, Icon, Paper, TextField, useTheme } from '@mui/material';



interface IBarraDeFerramentasProps {
    textoDaBusca?: string;
    mostrarImputBusca?: boolean;
    aoMudarTextoDeBusca?: (novoTexto: string) => void;
    textoBotaoNovo?: string;
    mostrarBotaoNovo?: boolean;
    aoClicarEmNovo?: () => void;
}

export const BarraDeFerramentas: React.FC<IBarraDeFerramentasProps> = ({
    textoDaBusca = '',
    mostrarImputBusca = false,
    aoMudarTextoDeBusca,
    aoClicarEmNovo,
    textoBotaoNovo = 'Novo',
    mostrarBotaoNovo = true
}) => {
    const theme = useTheme();
    return (
        <Box
            height={theme.spacing(5)}
            marginX={1}
            padding={1}
            paddingX={2}
            display="flex"
            gap={1}
            alignItems="center"
            component={Paper}
        >
            {mostrarImputBusca && (
                <TextField
                    size="small"
                    value={textoDaBusca}
                    onChange={(e) => aoMudarTextoDeBusca?.(e.target.value)}
                    placeholder='Pesquisar...'
                />
            )}
            <Box flex={1} display="flex" justifyContent="end">
                {mostrarBotaoNovo && (
                    <Button
                        color='primary'
                        disableElevation
                        variant='contained'
                        onClick={aoClicarEmNovo}
                        endIcon={<Icon>add</Icon>}
                    >{textoBotaoNovo}</Button>
                )}
            </Box>
        </Box>
    );
};