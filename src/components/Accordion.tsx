import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { ReactComponent as Plus } from '../assets/plus.svg';
import Colors from '../styles/Colors.module.scss'

export default function ControlledAccordions() {
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange =
        (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <div>
            <Accordion
                expanded={expanded === 'panel1'}
                onChange={handleChange('panel1')}
                sx={{}}
            >
                <AccordionSummary
                    expandIcon={<Plus width='16px' height='16px' />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography>Kosten von Backnang</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                        Aliquam eget maximus est, id dignissim quam.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<Plus width='16px' height='16px' />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography>
                        Kosten von Fellbach, Ludwigsburg, Kirchheim unter Teck,
                        Marbach am Neckar, Esslingen
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                        varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                        laoreet.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
