
import { styled } from '@mui/material/styles';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { ReactComponent as Plus } from '../assets/images/plus.svg';
import { FC, useState } from 'react';

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    backgroundColor: 'transparent',

    // TODO: colors should be imported from Globale or from Color module 

    border: `0.5px solid #A2A2A2`,
    borderLeft: '0',
    borderRight: '0',
    color: '#EDEFEF',
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        expandIcon={<Plus width='16px' height='16px' color='#EDEFEF' />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor: 'transparent',
    paddingLeft: 0,
    // flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        // marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));
interface AccordionsProps {
    contents: Array<{ title: string, paragraph: string }>;
}

const CustomizedAccordions: FC<AccordionsProps> = (props) => {
    const [expanded, setExpanded] = useState<string | false>('');

    const handleChange =
        (panel: string) => (_event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };

    return (
        <div>
            {
                props.contents.map((content, index) => (
                    <Accordion
                        expanded={expanded === `panel${index}`}
                        onChange={handleChange(`panel${index}`)}
                    >
                        <AccordionSummary
                            aria-controls={`panel${index}d-content`}
                            id={`panel${index}d-header`}
                        >
                            <Typography>{content.title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>{content.paragraph}</Typography>
                        </AccordionDetails>
                    </Accordion>
                ))
            }
        </div>
    );
}
export default CustomizedAccordions;