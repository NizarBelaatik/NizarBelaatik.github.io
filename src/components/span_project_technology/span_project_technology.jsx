import React from 'react';
import './span_project_technology.css'

const SpanPCate  = ({ title }) => {
    // Define the color mapping for different technologies
    const colorMap = {
        'html': '#E44D26',
        'css': '#1572B6',
        'javascript': '#F7E018',
        'java': '#007396',
        'jee': 'rgb(0, 115, 150)',
        'python': '#306998',
        'django': '#092E20',
        'laravel': '#FF2D20',
        'php': '#787CB5',
        'mysql': '#00758F',
        'sql': '#E34F26',
        'selenium': '#43B02A',
        'pandas': '#150458',
        'numpy': '#013243',
        'react.js': '#61DAFB',
        'jquery': '#0769AD',
        'bootstrap': '#7952B3',
        'postgresql':'#336791',
        'sqlite':'#013A58',
        'pyqt':'#41C652',
        'pyqt5':'#41C652',
        'pyside':'#4B8BBE',
        'pyside2':'#1C75BC',
        'qt designer':'#41C652',
        'git':'#f14e32',
        'github':'#2b3137',
        'apache':'#CF1F3F',
        'xampp':'#E14D43',
    };
    // Get the color based on the title
    const normalizedTitle = title.toLowerCase();
    const style_color = colorMap[normalizedTitle] || '#66FCF1'; // Default to black if title not found
    return (
        <span className="SpanPCate " title={title} style={{ color: style_color ,borderColor:style_color}}>{title}</span>
    );
};

export default SpanPCate ;