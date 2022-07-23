
import { styled } from '@mui/material/styles';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { ReactComponent as Plus } from '../assets/images/plus.svg';
import { FC, useState } from 'react';

const AccordionItem = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    // TODO: Create my own theme instead of overwriting the theme in every component
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

const AccordionItemSummary = styled((props: AccordionSummaryProps) => (
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

const AccordionItemDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));
interface AccordionsProps {
    contents: Array<{ title: string, paragraph: string }>;
}

const Accordion: FC<AccordionsProps> = (props) => {
    const [expanded, setExpanded] = useState<string | false>('');

    const handleChange = (panel: string) => (_event: React.SyntheticEvent, newExpanded: boolean) => {
            console.log(newExpanded, panel, expanded)
            setExpanded(newExpanded ? panel : false);
        };

    return (
        <div>
            {
                props.contents.map((content, index) => (
                    <AccordionItem
                        key={index}
                        expanded={expanded === `panel${index}`}
                        onChange={handleChange(`panel${index}`)}
                    >
                        <AccordionItemSummary
                            aria-controls={`panel${index}d-content`}
                            id={`panel${index}d-header`}
                        >
                            <Typography>{content.title}</Typography>
                        </AccordionItemSummary>
                        <AccordionItemDetails>
                            <Typography>{content.paragraph}</Typography>
                        </AccordionItemDetails>
                    </AccordionItem>
                ))
            }
        </div>
    );
}
export default Accordion;