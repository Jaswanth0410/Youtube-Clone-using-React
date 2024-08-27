import React from 'react';
import './Chess.css'
import { FaRegChessPawn } from "react-icons/fa6";
import { FaChessRook } from "react-icons/fa6";
import { FaChessBishop } from "react-icons/fa";
import { FaChessKnight } from "react-icons/fa6";
import { FaChessKing } from "react-icons/fa6";
import { FaChessQueen } from "react-icons/fa6";

function Chess(){
    return (
        <>
         <table class="chess">
        <tr>
            <td class="white"><p style={{color:"white"}}><FaChessRook /></p></td>
            <td class="black"><p style={{color:"white"}}><FaChessKnight /></p></td>
            <td class="white"><p style={{color:"white"}}><FaChessBishop /></p></td>
            <td class="black"><p style={{color:"white"}}><FaChessKing /></p></td>
            <td class="white"><p style={{color:"white"}}><FaChessQueen /></p></td>
            <td class="black"><p style={{color:"white"}}><FaChessBishop /></p></td>
            <td class="white"><p style={{color:"white"}}><FaChessKnight /></p></td>
            <td class="black"><p style={{color:"white"}}><FaChessRook /></p></td>
        </tr>
        <tr>
            <td class="black"><p style={{color:"white"}}><FaRegChessPawn /></p>
            </td>
            <td class="white"><p style={{color:"white"}}><FaRegChessPawn /></p>
            </td>
            <td class="black"><p style={{color:"white"}}><FaRegChessPawn /></p>
            </td>
            <td class="white"><p style={{color:"white"}}><FaRegChessPawn /></p>
            </td>
            <td class="black"><p style={{color:"white"}}><FaRegChessPawn /></p>
            </td>
            <td class="white"><p style={{color:"white"}}><FaRegChessPawn /></p>
            </td>
            <td class="black"><p style={{color:"white"}}><FaRegChessPawn /></p>
            </td>
            <td class="white"><p style={{color:"white"}}><FaRegChessPawn /></p>
            </td>
        </tr>
        <tr>
            <td class="white"></td>
            <td class="black"></td>
            <td class="white"></td>
            <td class="black"></td>
            <td class="white"></td>
            <td class="black"></td>
            <td class="white"></td>
            <td class="black"></td>
        </tr>
        <tr>
            <td class="black"></td>
            <td class="white"></td>
            <td class="black"></td>
            <td class="white"></td>
            <td class="black"></td>
            <td class="white"></td>
            <td class="black"></td>
            <td class="white"></td>
        </tr>
        <tr>
            <td class="white"><FaRegChessPawn /></td>
            <td class="black"><FaRegChessPawn /></td>
            <td class="white"><FaRegChessPawn /></td>
            <td class="black"><FaRegChessPawn /></td>
            <td class="white"><FaRegChessPawn /></td>
            <td class="black"><FaRegChessPawn /></td>
            <td class="white"><FaRegChessPawn /></td>
            <td class="black"><FaRegChessPawn /></td>
        </tr>
        <tr>
            <td class="black"><FaChessRook /></td>
            <td class="white"><FaChessKnight /></td>
            <td class="black"><FaChessBishop /></td>
            <td class="white"><FaChessQueen /></td>
            <td class="black"><FaChessKing /></td>
            <td class="white"><FaChessBishop /></td>
            <td class="black"><FaChessKnight /></td>
            <td class="white"><FaChessRook /></td>
        </tr>

    </table>
    </>
    )
}

export default Chess;