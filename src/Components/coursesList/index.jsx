import { Box, Card, CardContent } from "@mui/material";
import GroupIcon from '@mui/icons-material/Group';

function CoursesList() {
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2 }}>
                <Card sx={{ height: 200, width: 250, py: 6, mt: 8, mb: 2, border: "1px solid #E0E0E0", position: 'relative', overflow: 'visible', background: '#0B73B7' }}>
                    <Box
                        sx={{
                            border: '2px solid black',
                            borderRadius: '50%',
                            width: 70,
                            background: "#0B73B7",
                            padding: '4px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 70,
                            position: 'absolute',
                            top: -35,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            overflow: 'visible'
                        }}
                    >
                        <GroupIcon sx={{ color: 'white', fontSize: 50 }} />
                    </Box>
                    <CardContent sx={{ textAlign: 'center', mt: 3, color: 'white', fontSize: 30 }}>
                        Active
                        <br />
                        10
                    </CardContent>
                </Card>
                <Card sx={{ height: 200, width: 250, py: 6, mt: 8, mb: 2, border: "1px solid #E0E0E0", position: 'relative', overflow: 'visible', background: "#e53935" }}>
                    <Box
                        sx={{
                            border: '2px solid black',
                            borderRadius: '50%',
                            width: 70,
                            background: "#e53935",
                            padding: '4px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 70,
                            position: 'absolute',
                            top: -35,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            overflow: 'visible'
                        }}
                    >
                        <GroupIcon sx={{ color: 'white', fontSize: 50 }} />
                    </Box>
                    <CardContent sx={{ textAlign: 'center', mt: 3, color: 'white', fontSize: 30 }}>
                        Active
                        <br />
                        10
                    </CardContent>
                </Card>
                <Card sx={{ height: 200, width: 250, py: 6, mt: 8, mb: 2, border: "1px solid #E0E0E0", position: 'relative', overflow: 'visible', background: '#4caf50' }}>
                    <Box
                        sx={{
                            border: '2px solid black',
                            borderRadius: '50%',
                            width: 70,
                            background: '#4caf50',
                            padding: '4px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 70,
                            position: 'absolute',
                            top: -35,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            overflow: 'visible'
                        }}
                    >
                        <GroupIcon sx={{ color: 'white', fontSize: 50 }} />
                    </Box>
                    <CardContent sx={{ textAlign: 'center', mt: 3, color: 'white', fontSize: 30 }}>
                        Active
                        <br />
                        10
                    </CardContent>
                </Card>
            </Box>
        </>
    );
}

export default CoursesList;
